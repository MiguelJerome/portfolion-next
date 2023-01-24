import styles from '../styles/Menu.module.css';

export default function Menu() {
  return (
    <nav className={styles.navMenu}>
        <ul className={styles.ulMenu}>
            <li className={styles.liMenu}>À propos de moi</li>
            <li className={styles.liMenu}>Portfolio Project#1</li>
            <li className={styles.liMenu}>Portfolio Project#2</li>
            <li className={styles.liMenu}>CV</li>
        </ul>
    </nav>
);
}