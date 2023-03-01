import React from "react";
import styles from "/styles/Contact.module.css";
import Head from "next/head";
import ContactForm from "/components/Contact/ContactForm";
import ImageContact from "/components/Contact/ImageContact";

export default function ContactPage() {
	const handleChange = (event) => {
		event.preventDefault();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<Head>
				<title>Miguel Jerome - Contact</title>
				<meta
					name="description"
					content="Le code importe React et d'autres modules pour créer une page de contact avec un formulaire qui envoie un message à l'auteur. Il utilise Next.js et des styles CSS pour rendre la page attrayante et fonctionnelle. Le formulaire est géré par des fonctions handleChange et handleSubmit pour gérer les entrées utilisateur. La page utilise également des balises HTML pour la description et les métadonnées SEO."
				/>

				<meta property="og:title" content="Miguel Jerome - Contact" />
				<meta
					property="og:description"
					content="Le code importe React et d'autres modules pour créer une page de contact avec un formulaire qui envoie un message à l'auteur. Il utilise Next.js et des styles CSS pour rendre la page attrayante et fonctionnelle. Le formulaire est géré par des fonctions handleChange et handleSubmit pour gérer les entrées utilisateur. La page utilise également des balises HTML pour la description et les métadonnées SEO."
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
