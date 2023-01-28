import { useState } from "react"
import styles from '../styles/Menu.module.css';

export default function Menu(props) {
  const [page, setPage] = useState('Apropos');
  return (
    <nav className={styles.navMenu}>
        <ul className={styles.ulMenu}>
            <button className={`${styles.buttonMenu} ${styles.title}`} onClick={() => setPage('Apropos')}><h1>Miguel Jerome</h1></button>
            <button className={styles.buttonMenu} onClick={() => setPage('Apropos')}>À propos</button>
            <button className={styles.buttonMenu} onClick={() => setPage('Projet1')}>Projet1</button>
            <button className={styles.buttonMenu} onClick={() => setPage('Projet2')}>Projet2</button>
            <button className={styles.buttonMenu} onClick={() => setPage('CV')}>CV</button> 
        </ul>
    </nav>
    
);
}