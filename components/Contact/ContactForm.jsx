import React from "react";
import PropTypes from "prop-types";
import { useContactForm } from "./useContactForm";
import Nom from "./Nom";
import Email from "./Email";
import Message from "./Message";
import ErrorMessage from "./ErrorMessage";
import BoutonEnvoyer from "./BoutonEnvoyer";

function ContactForm() {
	// Récupérer les données du formulaire et les fonctions de gestion des événements depuis le hook useContactForm
	const {
		formData = {}, // Initialiser les données du formulaire
		errorMessage, // Initialiser les messages d'erreur
		handleChange, // Fonction de gestion de changement des données
		handleSubmit, // Fonction de gestion de soumission du formulaire
	} = useContactForm();
	// Extraire les données du formulaire
	const { name, email, message } = formData;

	return (
		<main>
			{/* Créer un formulaire avec les champs de nom, email, message, et un bouton d'envoi */}
			<form noValidate onSubmit={(event) => handleSubmit(event, formData)}>
				<Nom name={name} handleChange={handleChange} />
				<ErrorMessage message={errorMessage.name || undefined} name="Nom" />
				<Email email={email} handleChange={handleChange} />
				<ErrorMessage message={errorMessage.email || undefined} name="Email" />
				<Message message={message} handleChange={handleChange} />
				<ErrorMessage
					message={errorMessage.message || undefined}
					name="Message"
				/>
				<BoutonEnvoyer handleFormSubmit={handleSubmit} />
			</form>
		</main>
	);
}

// Définir les types de props pour le composant ContactForm
ContactForm.propTypes = {
	formData: PropTypes.object,
	errorMessage: PropTypes.object,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

// Initialiser les valeurs par défaut pour les props non obligatoires
ContactForm.defaultProps = {
	formData: {},
	errorMessage: {},
};

export default ContactForm;
