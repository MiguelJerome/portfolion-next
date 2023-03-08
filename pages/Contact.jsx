import React from "react";
import styles from "/styles/Contact.module.css";
import Head from "next/head";
import ContactForm from "/components/Contact/ContactForm";
import ImageContact from "/components/Contact/ImageContact";
import { useContactForm } from "/components/Contact/useContactForm";

export default function ContactPage() {
	const { formData, errorMessage, handleChange, handleSubmit } =
		useContactForm();

	return (
		<>
			<Head>
				<title>Miguel Jerome - Contact</title>
				<meta
					name="description"
					content="Formulaire de contact professionnel pour rejoindre Miguel Jérôme et pour discuter de nouvelles opportunités professionnelles"
				/>

				<meta property="og:title" content="Miguel Jerome - Contact" />
				<meta
					property="og:description"
					content="Formulaire de contact professionnel pour rejoindre Miguel Jérôme et pour discuter de nouvelles opportunités professionnelles"
				/>
				<meta
					property="og:image"
					content="http://localhost:3000/MiguelJerome.png"
				/>
			</Head>
			<main>
				<div className={styles.contactWrapper}>
					<ImageContact />
					<p className={styles.contactTitle}>Entrer en contact</p>
					<div className={styles.contactWrapper}>
						<p className={styles.p}>
							J&apos;aimerais avoir de vos nouvelles ! Si vous avez des
							questions, des commentaires ou si vous voulez simplement dire
							bonjour, n&apos;hésitez pas à m&apos;écrire en utilisant le
							formulaire de contact ci-dessous. Je ferai de mon mieux pour vous
							répondre dans les plus brefs délais.
						</p>
					</div>
				</div>
				<div className={styles.contactWrapper}>
					<h1 className={styles.title}>Contactez-moi</h1>
					<ContactForm
						formData={formData}
						errorMessage={errorMessage}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
					/>
					<p>
						Merci d&apos;être passé! J&apos;ai hâte d&apos;avoir de vos
						nouvelles.
					</p>
				</div>
			</main>
		</>
	);
}
