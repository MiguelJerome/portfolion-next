import styles from "../styles/Bio.module.css";

export default function Apropos() {
	return (
		<>
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
