import React from "react";
import styles from "/styles/Contact.module.css";
import PropTypes from "prop-types";

// Composant qui représente le champ de saisie du nom dans le formulaire de contact
const Nom = ({ name, handleChange }) => {
	return (
		<div className={styles.formGroup}>
			<label htmlFor="name">Nom:*</label>
			<input
				type="text"
				id="name"
				name="name"
				value={name}
				onChange={handleChange}
				required
			/>
		</div>
	);
};

// Définition des types de props attendus pour le composant Nom
Nom.propTypes = {
	name: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
};

export default Nom;
