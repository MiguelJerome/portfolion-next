import Image from 'next/image'
import { useRouter } from 'next/router'

import github from '../public/github-9-xxl.png'
import linkedIn from '../public/linkedIn.png'
import stackOverflow from '../public/stackOverflow.png'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    const router = useRouter()
    return <footer className={styles.footer}>
        <a href="https://github.com/MiguelJerome" onClick={(event) => 
            {event.preventDefault(); 
             router.push("https://github.com/MiguelJerome")}}><Image src={github} alt="GitHub" width={100} height={100} />
        </a>
        <a href="https://www.linkedin.com/in/miguel-jerome-7a023396/" onClick={(event) => 
            {event.preventDefault(); 
            router.push("https://www.linkedin.com/in/miguel-jerome-7a023396/")}}>
            <Image src={linkedIn} alt="LinkedIn" width={100} height={100} />
        </a>
        <a href="https://stackoverflow.com/users/19123123/miguel-jerome" onClick={(event) => 
            {event.preventDefault(); 
            router.push("https://stackoverflow.com/users/19123123/miguel-jerome")}}>
            <Image src={stackOverflow} alt="StackOverflow" width={100} height={100} />
        </a>   
    </footer>
}