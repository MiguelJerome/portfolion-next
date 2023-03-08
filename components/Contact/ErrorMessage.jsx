import React from "react";
import PropTypes from "prop-types";
import styles from "/styles/Contact.module.css";

function ErrorMessage({ message }) {
	if (message === undefined || message === null) {
		return null;
	}

	return (
		<div className={styles.errorText}>
			<p>{message}</p>
		</div>
	);
}

ErrorMessage.propTypes = {
	message: PropTypes.string,
};

ErrorMessage.defaultProps = {
	message: "",
};

export default ErrorMessage;
