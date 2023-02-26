import styles from '../styles/Menu.module.css';
import MenuBoutonSousTitre from '/components/Menu/MenuBoutonSousTitre';

export default function Menu() {
  return (
    <>
      <nav className={styles.navMenu}>
          <ul className={styles.ulMenu}>
            <MenuBoutonSousTitre href="/" className={`${styles.buttonMenu}  `}>
              <button className={`${styles.buttonMenu} ${styles.title} ${styles.monNom}`}><h1>Miguel Jerome</h1></button>
            </MenuBoutonSousTitre>

            <MenuBoutonSousTitre href="/Apropos">
              <button className={styles.buttonMenu}>À propos</button>
            </MenuBoutonSousTitre>

            <MenuBoutonSousTitre href="/Projet1">
              <button className={styles.buttonMenu}>Projet1</button>
            </MenuBoutonSousTitre>

            <MenuBoutonSousTitre href="/Projet2">
              <button className={styles.buttonMenu}>Projet2</button>
            </MenuBoutonSousTitre>

            <MenuBoutonSousTitre href="/CV">
              <button className={styles.buttonMenu}>CV</button> 
            </MenuBoutonSousTitre> 
          
            <MenuBoutonSousTitre href="/Contact">
              <button className={styles.buttonMenu}>Contact</button> 
            </MenuBoutonSousTitre> 
          </ul> 
      </nav>
    </>
  );
}
