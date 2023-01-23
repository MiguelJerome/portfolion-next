import { useRouter } from 'next/router'
import styles from '../styles/Menu.module.css'

export default function Menu() {
const router = useRouter()

return <nav className={styles.navMenu}>
    <ul className={styles.ulMenu}>
        <li className={styles.liMenu} onClick={() => router.push('/')}>À propos de moi</li>
        <li className={styles.liMenu} onClick={() => router.push('/portfolio-project-1')}>Portfolio Project#1</li>
        <li className={styles.liMenu} onClick={() => router.push('/portfolio-project-2')}>Portfolio Project#2</li>
        <li className={styles.liMenu} onClick={() => router.push('/cv')}>CV</li>
    </ul>
  </nav>
}