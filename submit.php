<?php
// Autoriser les requêtes de n'importe quel domaine
// Je peux remplacer * par une URL spécifique
header("Access-Control-Allow-Origin: *");
// Autoriser les méthodes POST
header("Access-Control-Allow-Methods: POST, OPTIONS");
// Autoriser les en-têtes personnalisés
header("Access-Control-Allow-Headers: Content-Type");
// Pour les requêtes OPTIONS préliminaires
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit(0);
}
header("Content-Type: application/json; charset=UTF-8");

// Paramètres de connexion à la base de données
$host = "localhost"; // Ou l'hôte fourni par Hostinger
$dbname = "u440607261_portfolio"; // Le nom de la base de données
$username = "u440607261_stephen_ins"; // Ou le nom d'utilisateur fourni par Hostinger
$password = "]YOth20=+7n"; // Ou le mot de passe fourni par Hostinger

// Connexion à la base de données, en utilisant les paramètres définis ci-dessus
$conn = new mysqli($host, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
  // Si la connexion échoue, retourner un message d'erreur, et arrêter le script
  die(json_encode(["success" => false, "message" => "Connexion échouée"]));
}

// Récupérer les données JSON envoyées par React, et les décoder, pour les utiliser dans le script
$data = json_decode(file_get_contents("php://input"), true);
// Vérifier si les données sont valides
if (!$data) {
  // Si les données sont invalides, retourner un message d'erreur, et arrêter le script
  die(json_encode(["success" => false, "message" => "Données invalides"]));
}

// Validation stricte des données
// Vérification de la présence de toutes les données requises
if (!isset($data['lastName']) || !isset($data['firstName']) || !isset($data['email']) || !isset($data['message'])) {
  die(json_encode(["success" => false, "message" => "Tous les champs sont obligatoires"]));
}

// Vérification du format de l'email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
  die(json_encode(["success" => false, "message" => "Format d'email invalide"]));
}

// Vérification de la longueur des données
if (strlen($data['lastName']) < 2 || strlen($data['lastName']) > 100) {
  die(json_encode(["success" => false, "message" => "Le nom doit contenir entre 2 et 100 caractères"]));
}

if (strlen($data['firstName']) < 2 || strlen($data['firstName']) > 100) {
  die(json_encode(["success" => false, "message" => "Le prénom doit contenir entre 2 et 100 caractères"]));
}

if (strlen($data['message']) < 10 || strlen($data['message']) > 3000) {
  die(json_encode(["success" => false, "message" => "Le message doit contenir entre 10 et 3000 caractères"]));
}

// Protection contre les tentatives d'injection
$blacklist = ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'DROP', 'ALTER', '<script', '</script>', 'eval('];
foreach ($blacklist as $term) {
  if (stripos($data['message'], $term) !== false) {
    die(json_encode(["success" => false, "message" => "Le message contient des termes non autorisés"]));
  }
}

// Récupérer les données envoyées par React, et les échapper pour éviter les injections SQL, et les failles XSS
// Les failles XSS peuvent être utilisées pour exécuter des scripts malveillants dans le navigateur de l'utilisateur
$lastName = $conn->real_escape_string($data['lastName']);
$firstName = $conn->real_escape_string($data['firstName']);
$email = $conn->real_escape_string($data['email']);
$message = $conn->real_escape_string($data['message']);

// Insérer dans la base de données, les données envoyées par React
// $sql permet de définir la requête SQL à exécuter
$sql = "INSERT INTO contacts (last_name, first_name, email, message) VALUES ('$lastName', '$firstName', '$email', '$message')";

// Exécuter la requête SQL, et vérifier si elle a réussi
if ($conn->query($sql) === TRUE) {
  // Envoi de l'email
  $to = "portfolio@stephen-ins.com";
  $subject = "Nouveau message de contact - Portfolio";
  $email_message = "Vous avez reçu un nouveau message de contact :\n\n";
  $email_message .= "Nom: " . $lastName . "\n";
  $email_message .= "Prénom: " . $firstName . "\n";
  $email_message .= "Email: " . $email . "\n";
  $email_message .= "Message: " . $message . "\n";

  $headers = "From: noreply@stephen-ins.com\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";

  // Envoi de l'email
  $mail_sent = mail($to, $subject, $email_message, $headers);

  if ($mail_sent) {
    echo json_encode(["success" => true, "message" => "Message enregistré et envoyé par email"]);
  } else {
    echo json_encode(["success" => true, "message" => "Message enregistré mais l'envoi par email a échoué"]);
  }
} else {
  echo json_encode(["success" => false, "message" => "Erreur: " . $conn->error]);
}
// Fermer la connexion à la base de données
$conn->close();
