import React, { useState } from 'react';
import styles from '/styles/Contact.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Form data:', formData);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (name === 'email') {
      const isValid = validateEmail(value);
      if (!isValid) {
        setErrorMessage('Votre email est invalide');
      } else {
        setErrorMessage('');
      }
    } else if (!value.length) {
      setErrorMessage(`${name} est requis.`);
    } else {
      setErrorMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={message} onChange={handleChange} required />
      </div>
      {errorMessage && (
        <div>
          <p className={styles.errorText}>{errorMessage}</p>
        </div>
      )}
      <button type="submit" className={styles.button}>
        Envoyer
      </button>
    </form>
  );
}

export default ContactForm;
