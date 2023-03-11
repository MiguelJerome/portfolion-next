import React from "react";
import PropTypes from "prop-types";
import { useContactForm } from "./useContactForm";
import Nom from "./Nom";
import Email from "./Email";
import Message from "./Message";
import ErrorMessage from "./ErrorMessage";
import BoutonEnvoyer from "./BoutonEnvoyer";

function ContactForm() {
	const {
		formData = {},
		errorMessage,
		handleChange,
		handleSubmit,
	} = useContactForm();
	const { name, email, message } = formData;

	return (
		<main>
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

ContactForm.propTypes = {
	formData: PropTypes.object,
	errorMessage: PropTypes.object,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

ContactForm.defaultProps = {
	formData: {},
	errorMessage: {},
};

export default ContactForm;
