import Image from 'next/image';
import styles from '../styles/Circle.module.css';
import miguelPicture from '../public/MiguelJerome.png';

export default function Circle() {
    return (
        <>
            <main>
                <div className={styles.circleWrapper}>
                    <figure>
                        <figcaption className={styles.caption}>Miguel Jerome</figcaption>
                        <Image src={miguelPicture} alt="Miguel Picture" className={styles.circleImg}/>
                        <figcaption className={styles.caption}>Développeur Full Stack</figcaption>
                    </figure>
                </div>
            </main>
        </>
    );
    
}