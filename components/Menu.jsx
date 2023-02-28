import styles from '../styles/Menu.module.css';
import Link from 'next/link';

export default function Menu() {
  return (
    <>
      <nav className={styles.navMenu}>
        <ul className={`${styles.li} ${styles.ulMenu} `}>
          <li className={styles.li}>
            <Link href="/" className={`${styles.buttonMenu} ${styles.title} ${styles.monNom}`}>
              <h1>Miguel Jerome</h1>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/Apropos" className={`${styles.buttonMenu}`}>
              À propos
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/Projet1" className={styles.buttonMenu}>
              Projet1
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/Projet2" className={styles.buttonMenu}>
              Projet2
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/CV" className={styles.buttonMenu}>
              CV
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/Contact" className={styles.buttonMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
