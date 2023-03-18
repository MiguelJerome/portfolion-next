import { useState } from "react";

export const useContactForm = () => {
	// Définir l'état initial du formulaire et des messages d'erreur
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState({
		name: "",
		email: "",
		message: "",
	});
	// Fonctions de validation des champs du formulaire
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

	// Fonction appelée lors de la soumission du formulaire
	const handleSubmit = async (event, data) => {
		event.preventDefault();

		const { name, email, message } = formData;

		// Valider chaque champ du formulaire et afficher les messages d'erreur appropriés
		let validEmail = validateEmail(email);
		let validName = validateName(name);
		let validMessage = validateMessage(message);

		if (!name) {
			setErrorMessage((prevErrorMessage) => ({
				...prevErrorMessage,
				name: "Le champ nom est requis.",
			}));
		} else if (!validName) {
			setErrorMessage((prevErrorMessage) => ({
				...prevErrorMessage,
				name: "Votre nom doit contenir au moins 2 caractères",
			}));
		}

		if (!email) {
			setErrorMessage((prevErrorMessage) => ({
				...prevErrorMessage,
				email: "Le champ email est requis.",
			}));
		} else if (!validEmail) {
			setErrorMessage((prevErrorMessage) => ({
				...prevErrorMessage,
				email: "Votre email est invalide",
			}));
		}

		if (!message) {
			setErrorMessage((prevErrorMessage) => ({
				...prevErrorMessage,
				message: "Le champ message est requis.",
			}));
		} else if (!validMessage) {
			setErrorMessage((prevErrorMessage) => ({
				...prevErrorMessage,
				message: "Le champ message doit contenir au moins 2 caractères.",
			}));
		}

		// Si le formulaire n'est pas valide, ne pas l'envoyer
		if (!validEmail || !validName || !validMessage) {
			return;
		}

		// Si le formulaire est valide, envoyer les données au backend
		const response = await fetch("/api/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		// Si la requête est réussie, réinitialiser le formulaire et les messages d'erreur
		if (response.ok) {
			setFormData({ name: "", email: "", message: "" });
			setErrorMessage({ name: "", email: "", message: "" });
			console.log("Formulaire envoyé avec succès.");
			return;
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		// Mettre à jour l'état du formulaire en fonction du champ modifié
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));

		// Valider le champ modifié et afficher le message d'erreur approprié
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

	// Retourner un objet contenant les données du formulaire, les messages d'erreur, et les fonctions pour gérer les événements du formulaire
	return {
		formData,
		errorMessage,
		handleChange,
		handleSubmit,
	};
};
