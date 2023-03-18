import React from "react";
import PropTypes from "prop-types";
import styles from "/styles/Contact.module.css";

function ErrorMessage({ message }) {
	// Vérifier si le message est défini ou non, et renvoyer null si c'est le cas
	if (message === undefined || message === null) {
		return null;
	}

	// Afficher un message d'erreur dans un élément de paragraphe avec la classe CSS 'errorText' définie dans le module Contact.module.css
	return (
		<div className={styles.errorText}>
			<p>{message}</p>
		</div>
	);
}

// Spécifier les types de données attendus pour les props de ErrorMessage
ErrorMessage.propTypes = {
	message: PropTypes.string,
};

// Définir les valeurs par défaut pour les props de ErrorMessage
ErrorMessage.defaultProps = {
	message: "",
};

export default ErrorMessage;
