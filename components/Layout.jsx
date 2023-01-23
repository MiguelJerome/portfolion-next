import Header from "./Header";
import Footer from "./Footer";

import Image from 'next/image'


import styles from '../styles/Bio.module.css'


import miguelPicture from '../public/MiguelJerome.png'


export default function Layout(props) {
    return <>
        <Header />
        {props.children}

        <div className={styles.circleWrapper}>
            <figure>
                <figcaption className={styles.caption}>Miguel Jerome
                </figcaption>
                <Image src={miguelPicture} alt="Miguel Picture"  width={700} height={800} className={styles.circleImg}/>
                <figcaption className={styles.caption}>Développeur Full Stack
                </figcaption>
            </figure>
        </div>

        <div className={styles.bioTitle}>
            <p>BIO </p>
        </div>
        <div className={styles.bioWrapper}>
            <p>Je m'appelle Miguel Jerome </p>
        </div>
        <div className={styles.bioWrapper}>
            <p>
            J'ai fait mes études à l'Université d'Ottawa en tant que développeur web full stack et étudiant à La Cité collégiale d'Ottawa en programmation informatique. Je suis ravi de vous présenter mon travail actuel et j'espère que vous pourrez voir mon potentiel en tant que développeur. Je parle couramment le français et l'anglais.
            </p>
        </div>
        <Footer />
    </>
}