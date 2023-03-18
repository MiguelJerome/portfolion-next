import PropTypes from "prop-types";
import React from "react";
import styles from "/styles/Contact.module.css";

function Message({ message, handleChange }) {
	// Afficher un champ de texte avec une étiquette pour le message, une valeur initiale et une fonction de rappel pour gérer les changements dans le champ
	return (
		<div className={styles.formGroup}>
			<label htmlFor="message">Message:*</label>
			<textarea
				id="message"
				name="message"
				value={message}
				onChange={handleChange}
				required
			/>
		</div>
	);
}

// Spécifier les types de données attendus pour les props de Message
Message.propTypes = {
	message: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};

export default Message;
