import PropTypes from "prop-types";
import React from "react";
import styles from "/styles/Contact.module.css";

function Email({ email, handleChange }) {
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

Email.propTypes = {
  email: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Email;
