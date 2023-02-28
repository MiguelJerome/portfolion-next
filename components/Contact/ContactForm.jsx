import React from 'react';
import PropTypes from 'prop-types';
import { useContactForm } from './useContactForm';
import Nom from './Nom';
import Email from './Email';
import Message from './Message';
import ErrorMessage from './ErrorMessage';
import BoutonEnvoyer from './BoutonEnvoyer';

function ContactForm() {
  const { formData, errorMessage, handleChange, handleSubmit } = useContactForm();
  const { name, email, message } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <Nom name={name} handleChange={handleChange} />
      <Email email={email} handleChange={handleChange} />
      <Message message={message} handleChange={handleChange} />
      <ErrorMessage message={errorMessage} />
      <BoutonEnvoyer />
    </form>
  );
}

ContactForm.propTypes = {
  formData: PropTypes.object.isRequired,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
