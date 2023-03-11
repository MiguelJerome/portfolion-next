import Image from "next/image";
import styles from "../styles/Circle.module.css";
import miguelPicture from "../public/MiguelJeromeNew.png";

export default function Circle() {
	return (
		<>
			<main>
				<div className={styles.circleWrapper}>
					<figure>
						<figcaption className={styles.caption}>Miguel Jerome</figcaption>
						<div className={styles.circleImgWrapper}>
							<Image
								src={miguelPicture}
								alt="Miguel Picture"
								className={styles.circleImg}
								priority={true}
							/>
						</div>
						<figcaption className={styles.caption}>
							Développeur Full Stack
						</figcaption>
					</figure>
				</div>
			</main>
		</>
	);
}
