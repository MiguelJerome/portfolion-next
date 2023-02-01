import styles from '../styles/Menu.module.css';

export default function Menu({setPage}) {
  
  return (
    <>
      <nav className={styles.navMenu}>
          <ul className={styles.ulMenu}>   
              <a href="#" >
                  <button className={`${styles.buttonMenu} ${styles.title}`} onClick={() => setPage('Accueil')}><h1>Miguel Jerome</h1></button>
              </a>
              <a href="#" >
                <button className={styles.buttonMenu} onClick={() => setPage('Apropos')}>À propos</button>
              </a>
              <a href="#" >
                <button className={styles.buttonMenu} onClick={() => setPage('Projet1')}>Projet1</button>
              </a>
              <a href="#" >
                <button className={styles.buttonMenu} onClick={() => setPage('Projet2')}>Projet2</button>
              </a>
              <a href="#" >
                <button className={styles.buttonMenu} onClick={() => setPage('CV')}>CV</button> 
              </a>    
          </ul> 
      </nav>
    </>
  );
}