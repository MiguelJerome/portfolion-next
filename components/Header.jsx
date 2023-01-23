import Image from 'next/image'
import Menu from './Menu'

import styles from '../styles/Header.module.css'



export default function Header() {
    const titre = 'Laboratoire Next-React';

    return <header className={styles.header}>
        <h1 className={styles.titre}>Miguel Jerome</h1>
        <Menu />
    </header>
}