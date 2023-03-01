import Head from "next/head";
import styles from "../styles/NotFoundPage.module.css";

export default function NotFoundPage() {
	return (
		<>
			<Head>
				<title>Page - Non trouvé</title>
				<meta name="description" content="Page non trouvé." />

				<meta property="og:title" content="Page - Non trouvé" />
				<meta property="og:description" content="Page non trouvé." />
				<meta
					property="og:image"
					content="http://localhost:3000/MiguelJerome.png"
				/>
			</Head>
			<main>
				<div className={styles.notFoundWrapper}>
					<p>404 | Cette page est introuvable.</p>
				</div>
			</main>
		</>
	);
}
