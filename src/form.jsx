import { useState } from "react";
import "./index.css";

// Le hook useState permet de gérer un état local dans un composant fonctionnel avec 4 propriétés :
// - La valeur initiale de l'état, ici FormData qui contient les valeurs des champs du formulaire (lastName, firstName, email et message)
// - La fonction pour modifier l'état, ici setFormData qui prend un objet en paramètre et remplace l'état actuel par cet objet (en conservant les propriétés non modifiées)
const ContactForm = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    message: "",
  });

  // - La fonction pour modifier la valeur actuelle de l'état, ici handleChange qui prend un événement en paramètre et met à jour la valeur de l'état correspondante
  const handleChange = (e) => {
    // On met à jour la valeur de l'état avec les nouvelles données du formulaire
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // - La fonction pour soumettre le formulaire, ici handleSubmit qui prend un événement en paramètre et effectue une requête POST avec les données du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // On utilise l'API Fetch pour envoyer les données du formulaire à l'URL spécifiée
      const response = await fetch(
        // On spécifie l'URL de l'API
        "https://portfolio.stephen-ins.com/submit.php",
        {
          // On effectue une requête POST avec les données du formulaire
          // On spécifie le type de contenu de la requête
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // On convertit les données du formulaire en JSON et on les envoie dans le corps de la requête
          body: JSON.stringify(formData),
        }
      );
      // On attend la réponse de l'API et on la convertit en JSON
      const data = await response.json();
      // Si la réponse de l'API est un succès, on affiche un message de confirmation et on réinitialise les données du formulaire
      if (data.success) {
        alert("Message envoyé avec succès !");
        setFormData({ lastName: "", firstName: "", email: "", message: "" });
      } else {
        // Si la réponse de l'API est un échec, on affiche un message d'erreur avec le message renvoyé par l'API
        alert("Erreur : " + data.message);
      }
      // Dans quel cas on affiche une erreur ? : Si la requête Fetch échoue (par exemple si l'URL de l'API est incorrecte ou si le serveur ne répond pas)
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-center roun">
      <h2 className="text-3xl font-bold mb-8">Contactez-moi</h2>

      <h2 className="text-2xl font-bold text-red-400 mb-8">
        "Le serveur de messagerie est en cours de maintenance !"
      </h2>
      <h2 className="text-2xl font-bold text-gray-50-400 mb-8">
        "Veuillez me contacter via mes coordonnées en bas de page"
      </h2>

      {/* On crée un formulaire avec les champs du formulaire (nom, prénom, email, message) et les fonctions handleChange et handleSubmit */}
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="text-start block text-l font-semibold"
          >
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Saisir votre nom"
            // On attribue la valeur du champ à la propriété lastName de l'état local
            value={formData.lastName}
            // On appelle la fonction handleChange lorsqu'une modification est apportée au champ
            onChange={handleChange}
            className="text-white mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="text-start block text-l font-semibold"
          >
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Saisir votre prénom"
            // On attribue la valeur du champ à la propriété firstName de l'état local
            value={formData.firstName}
            // On appelle la fonction handleChange lorsqu'une modification est apportée au champ
            onChange={handleChange}
            className="text-white mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="text-start font-semibold block text-l"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Saisir votre email"
            // On attribue la valeur du champ à la propriété email de l'état local
            value={formData.email}
            // On appelle la fonction handleChange lorsqu'une modification est apportée au champ
            onChange={handleChange}
            className="text-white mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="text-start font-semibold block text-l"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Saisir votre message"
            // On attribue la valeur du champ à la propriété message de l'état local
            value={formData.message}
            // On appelle la fonction handleChange lorsqu'une modification est apportée au champ
            onChange={handleChange}
            className="text-white mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={10}
            required
          ></textarea>
        </div>
        <button
          // On crée un bouton de type submit pour envoyer le formulaire. Et la fonction handleSubmit est appelée lorsqu'on clique sur le bouton
          type="submit"
          className="bg-red-400 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};
// On exporte le composant ContactForm
export default ContactForm;
