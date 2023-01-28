import { useState } from "react"
import Link from 'next/link';
import styles from '../styles/Menu.module.css';

export default function Menu(props) {
  const [page, setPage] = useState('Accueil');
  return (
    <nav className={styles.navMenu}>
        <ul className={styles.ulMenu}>
            <Link href="/" /> 
            <Link href="/Accueil" >
                <button className={`${styles.buttonMenu} ${styles.title}`} onClick={() => setPage('Accueil')}><h1>Miguel Jerome</h1></button>
            </Link>
            <Link href="/Apropos" >
              <button className={styles.buttonMenu} onClick={() => setPage('Apropos')}>À propos</button>
            </Link>
            <Link href="/Projet1" >
              <button className={styles.buttonMenu} onClick={() => setPage('Projet1')}>Projet1</button>
            </Link>
            <Link href="/Projet2" >
              <button className={styles.buttonMenu} onClick={() => setPage('Projet2')}>Projet2</button>
            </Link>
            <Link href="/CV" >
              <button className={styles.buttonMenu} onClick={() => setPage('CV')}>CV</button> 
            </Link>  
        </ul>
    </nav>
  );
}