import PropTypes from "prop-types";
import React from "react";
import styles from "/styles/Contact.module.css";

function Email({ email, handleChange }) {
	// Afficher un champ de saisie pour l'email avec une étiquette et la classe CSS 'formGroup' définie dans le module Contact.module.css
	return (
		<div className={styles.formGroup}>
			<label htmlFor="email">Email:*</label>
			<input
				type="email"
				id="email"
				name="email"
				value={email}
				onChange={handleChange}
				required
			/>
		</div>
	);
}

// Spécifier les types de données attendus pour les props de Email
Email.propTypes = {
	email: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};

export default Email;
