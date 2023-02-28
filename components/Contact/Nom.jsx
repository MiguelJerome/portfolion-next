import React from "react";
import styles from "/styles/Contact.module.css";
import PropTypes from "prop-types";

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

Nom.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Nom;
