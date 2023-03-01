import Head from "next/head";
import styles from "../styles/Bio.module.css";

export default function Apropos() {
	return (
		<>
			<Head>
				<title>Miguel Jerome - A propos</title>
				<meta
					name="description"
					content="Développeur web full stack bilingue, passionné et diplômé d'Ottawa."
				/>

				<meta property="og:title" content="Miguel Jerome - A propos" />
				<meta
					property="og:description"
					content="Développeur web full stack bilingue, passionné et diplômé d'Ottawa."
				/>
				<meta
					property="og:image"
					content="http://localhost:3000/MiguelJerome.png"
				/>
			</Head>
			<main>
				<div className={styles.bioTitle}>
					<p>BIO </p>
				</div>
				<div className={styles.bioWrapper}>
					<p>Je m&apos;appelle Miguel Jerome </p>
				</div>
				<div className={styles.bioWrapper}>
					<p>
						J&apos;ai fait mes études à l&apos;Université d&apos;Ottawa en tant
						que développeur web full stack et étudiant à La Cité collégiale
						d&apos;Ottawa en programmation informatique. Je suis ravi de vous
						présenter mon travail actuel et j&apos;espère que vous pourrez voir
						mon potentiel en tant que développeur. Je parle couramment le
						français et l&apos;anglais.
					</p>
				</div>
			</main>
		</>
	);
}
