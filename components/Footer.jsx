import Image from "next/image";
import github from "../public/github-9-xxl.png";
import linkedIn from "../public/linkedin.svg";
import stackOverflow from "../public/stackOverflow.png";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/MiguelJerome"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={github} alt="GitHub" className={styles.img} />
      </a>
      <a
        href="https://www.linkedin.com/in/miguel-jerome-7a023396/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={linkedIn} alt="LinkedIn" className={styles.img} />
      </a>
      <a
        href="https://stackoverflow.com/users/19123123/miguel-jerome"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={stackOverflow} alt="StackOverflow" className={styles.img} />
      </a>
    </footer>
  );
}
