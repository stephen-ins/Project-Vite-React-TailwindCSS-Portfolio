<?php
// Autoriser les requêtes de n'importe quel domaine
// Je peux remplacer * par une URL spécifique
header("Access-Control-Allow-Origin: *");
// Autoriser les méthodes POST
// header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

// Paramètres de connexion à la base de données
$host = "localhost"; // Ou l'hôte fourni par Hostinger
$dbname = "portfolio"; // Le nom de la base de données
$username = "stephen_ins"; // Ou le nom d'utilisateur fourni par Hostinger
$password = ">]jG0Y9b^5sX"; // Ou le mot de passe fourni par Hostinger

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
  echo json_encode(["success" => true, "message" => "Message enregistré"]);
} else {
  echo json_encode(["success" => false, "message" => "Erreur: " . $conn->error]);
}
// Fermer la connexion à la base de données
$conn->close();
