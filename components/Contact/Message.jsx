import PropTypes from "prop-types";
import React from "react";
import styles from "/styles/Contact.module.css";

function Message({ message, handleChange }) {
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

Message.propTypes = {
  message: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Message;
