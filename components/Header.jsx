import Menu from './Menu';
import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.titre}>Miguel Jerome</h1>
            <Menu />
        </header>
    );
}