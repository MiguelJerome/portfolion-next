import React from "react";
import styles from "/styles/Contact.module.css";

function BoutonEnvoyer() {
	// Afficher un bouton d'envoi avec la classe CSS 'button' définie dans le module Contact.module.css
	return (
		<button type="submit" className={styles.button}>
			Envoyer
		</button>
	);
}

export default BoutonEnvoyer;
