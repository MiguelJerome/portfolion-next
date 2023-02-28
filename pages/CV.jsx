import Image from "next/image";
import indeed from "../public/resume.svg";
import styles from "../styles/CV.module.css";

export default function CV() {
  return (
    <>
      <main>
        <div className={styles.cvTitle}>
          <p>Compétences Front-End</p>
        </div>
        <div className={styles.cvWrapper}>
          <ul className={styles.ulCV}>
            <li className={styles.liCV}>HTML</li>
            <li className={styles.liCV}>CSS</li>
            <li className={styles.liCV}>JavaScript</li>
            <li className={styles.liCV}>JQuery</li>
            <li className={styles.liCV}>Responsive design</li>
            <li className={styles.liCV}>React</li>
            <li className={styles.liCV}>React Next.js</li>
            <li className={styles.liCV}>Bootstrap</li>
          </ul>
          <a
            href="https://my.indeed.com/p/miguelj-ci3ud34"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={indeed} alt="indeed" className={styles.img} />
          </a>
        </div>

        <div className={styles.cvTitle}>
          <p>Compétences Back-End</p>
        </div>
        <div className={styles.cvWrapper}>
          <ul className={styles.ulCV}>
            <li className={styles.liCV}>Api</li>
            <li className={styles.liCV}>Node.js</li>
            <li className={styles.liCV}>Insomnia</li>
            <li className={styles.liCV}>Postman</li>
            <li className={styles.liCV}>MSQL,Sequelize</li>
            <li className={styles.liCV}>Microsoft SQL Server</li>
            <li className={styles.liCV}>SQL Lite Studio</li>
            <li className={styles.liCV}>Express</li>
            <li className={styles.liCV}>Heroku</li>
            <li className={styles.liCV}>Handlebar</li>
            <li className={styles.liCV}>MongoDB, Mongoose, NOSQL</li>
            <li className={styles.liCV}>C++</li>
            <li className={styles.liCV}>C#</li>
            <li className={styles.liCV}>Java</li>
            <li className={styles.liCV}>PWA</li>
            <li className={styles.liCV}>Github</li>
            <li className={styles.liCV}>WPF</li>
            <li className={styles.liCV}>GraphQL</li>
            <li className={styles.liCV}>Rust</li>
            <li className={styles.liCV}>Python</li>
            <li className={styles.liCV}>Docker</li>
          </ul>
          <a
            href="https://my.indeed.com/p/miguelj-ci3ud34"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={indeed} alt="indeed" className={styles.img} />
          </a>
        </div>

        <div className={styles.cvTitle}>
          <p>Compétences Mobile</p>
        </div>
        <div className={styles.cvWrapper}>
          <ul className={styles.ulCV}>
            <li className={styles.liCV}>Android Studio</li>
            <li className={styles.liCV}>Xcode, Swift</li>
          </ul>
          <a
            href="https://my.indeed.com/p/miguelj-ci3ud34"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={indeed} alt="indeed" className={styles.img} />
          </a>
        </div>
      </main>
    </>
  );
}
