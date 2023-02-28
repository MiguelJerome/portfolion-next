import { useState } from "react";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateName = (name) => {
    const re = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/;
    return re.test(name);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "email") {
      const isValid = validateEmail(value);

      if (!isValid) {
        setErrorMessage("Votre email est invalide");
      } else {
        setErrorMessage("");
      }
    } else if (name === "name") {
      const isValid = validateName(value);

      if (!isValid) {
        setErrorMessage("Votre nom est invalide");
      } else {
        setErrorMessage("");
      }
    } else if (!value.length) {
      setErrorMessage(`${name} est requis.`);
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!errorMessage) {
      console.log("Form data:", formData);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return {
    formData,
    errorMessage,
    handleChange,
    handleSubmit,
  };
};
