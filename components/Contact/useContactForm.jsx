import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState({
		name: "",
		email: "",
		message: "",
		submit: "",
	});

	const validateEmail = (email) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(String(email).toLowerCase());
	};

	const validateName = (name) => {
		const regex = /^[a-zA-Z\s]{2,}$/;
		return regex.test(name);
	};

	const validateMessage = (message) => {
		const regex = /^[a-zA-Z\s]{2,}$/;
		return regex.test(message);
	};

	const handleSubmit = async (event, data) => {
		event.preventDefault();

		const { name, email, message } = formData;

		let validEmail = validateEmail(email);
		let validName = validateName(name);
		let validMessage = validateMessage(message);

		if (!validEmail || !validName || !validMessage) {
			toast.error(
				`Veuillez corriger les erreurs avant de soumettre le formulaire.`,
				{
					hideProgressBar: true,
					autoClose: 3500,
					type: "error",
					position: "bottom-left",
				}
			);
			setErrorMessage({
				submit:
					"Veuillez corriger les erreurs avant de soumettre le formulaire.",
			});
			return;
		}

		try {
			const response = await fetch("/api/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (response.ok) {
				toast.success(`Formulaire envoyé avec succès.`, {
					hideProgressBar: true,
					autoClose: 3500,
					type: "success",
					position: "bottom-left",
				});
				setFormData({ name: "", email: "", message: "" });
				setErrorMessage({ name: "", email: "", message: "", submit: "" });
				console.log("Formulaire envoyé avec succès.");
				return;
			}

			const errorMessage = await response.text();
			toast.error(
				`Le serveur n'a pas pu traiter votre demande. Veuillez réessayer plus tard.`,
				{
					hideProgressBar: true,
					autoClose: 3500,
					type: "error",
					position: "bottom-left",
				}
			);
			setErrorMessage({
				submit:
					"Le serveur n'a pas pu traiter votre demande. Veuillez réessayer plus tard.",
			});
			console.error(errorMessage);
		} catch (error) {
			toast.error(`Une erreur s'est produite. Veuillez réessayer plus tard.`, {
				hideProgressBar: true,
				autoClose: 3500,
				type: "error",
				position: "bottom-left",
			});
			setErrorMessage({
				submit: "Une erreur s'est produite. Veuillez réessayer plus tard.",
			});
			console.error(error);
		}
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
				setErrorMessage((prevErrorMessage) => ({
					...prevErrorMessage,
					email: "Votre email est invalide",
				}));
			} else {
				setErrorMessage((prevErrorMessage) => ({
					...prevErrorMessage,
					email: "",
				}));
			}
		} else if (name === "name") {
			const isValid = validateName(value);

			if (!isValid) {
				setErrorMessage((prevErrorMessage) => ({
					...prevErrorMessage,
					name: "Votre nom doit contenir au moins 2 caractères",
				}));
			} else {
				setErrorMessage((prevErrorMessage) => ({
					...prevErrorMessage,
					name: "",
				}));
			}
		} else if (name === "message") {
			const isValid = validateMessage(value);

			if (!isValid) {
				setErrorMessage((prevErrorMessage) => ({
					...prevErrorMessage,
					message: "Le champ message doit contenir au moins 2 caractères.",
				}));
			} else {
				setErrorMessage((prevErrorMessage) => ({
					...prevErrorMessage,
					message: "",
				}));
			}
		}
	};

	return {
		formData,
		errorMessage,
		handleChange,
		handleSubmit,
	};
};
