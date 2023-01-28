import Image from 'next/image';
import GoogleSearchMain from '../public/BookSearchGogleMain.png';
import BookSearchConnexion from '../public/BookSearchConnexion.png';
import BookSearchInscription from '../public/BookSearchInscription.png';
import BookSearchPageRecherche from '../public/BookSearchPageRecherche.png';
import BookSearchLivresEnregistres from '../public/BookSearchLivresEnregistres.png';
import styles from '../styles/Projet1.module.css';

export default function Projet1() {
return(
     <>      
        <section>
            <div className={styles.projectTitle }>
                <p>Google Books API Search Engine</p>
            </div>      
                <a href="https://github.com/MiguelJerome/book-search-engine" target="_blank" rel="noopener noreferrer">
                <Image src={GoogleSearchMain} alt="GoogleSearchMain" className={styles.img} />
                </a>
            <div className={styles.projectWrapper}>
                <p>
                Ce projet permet aux développeurs d'accéder et de rechercher dans la base de données Google Books et à l'aide de l'API Google Books. L'application a été créée à l'aide de la pile MERN, avec un front-endl React, une base de données MongoDB, un serveur et une API Node.js/Express.js. Il est déjà configuré pour permettre aux utilisateurs d'enregistrer des recherches de livres dans le back-end. De plus, l'API peut également être utilisée pour accéder aux aperçus de livres et au texte intégral des livres qui ont été numérisés par Google.
                </p>
            </div>

            <div className={styles.projectTitle }>
                <p>Page de connexion</p>
            </div>      
                <a href="https://github.com/MiguelJerome/book-search-engine" target="_blank" rel="noopener noreferrer">
                <Image src={BookSearchConnexion} alt="BookSearchConnexion" className={styles.img} />
                </a>
            <div className={styles.projectWrapper}>
                <p>
                    La "page de connexion" permet aux utilisateurs de se connecter à un compte existant. Cette page comprend des formulaires permettant de saisir les identifiants de connexion avec une adresse e-mail et un mot de passe de se connecter sur notre site Internet.
                </p>
            </div>

            <div className={styles.projectTitle }>
                <p>Page d’inscription</p>
            </div>      
                <a href="https://github.com/MiguelJerome/book-search-engine" target="_blank" rel="noopener noreferrer">
                <Image src={BookSearchInscription} alt="BookSearchInscription" className={styles.img} />
                </a>
            <div className={styles.projectWrapper}>
                <p>
                    La "page d'inscription" est l'endroit où les utilisateurs peuvent créer un nouveau compte. Cette page comprend des formulaires permettant de saisir des informations personnelles telles que le nom, l'adresse e-mail et le mot de passe. Le but d'une page d'inscription est de permettre aux utilisateurs de créer un nouveau compte et d'accéder à des fonctionnalités ou à du contenu personnalisés sur notre site Web.
                </p>
            </div>

            <div className={styles.projectTitle }>
                <p>Page de recherche de livre</p>
            </div>      
                <a href="https://github.com/MiguelJerome/book-search-engine" target="_blank" rel="noopener noreferrer">
                <Image src={BookSearchPageRecherche} alt="BookSearchPageRecherche" className={styles.img} />
                </a>
            <div className={styles.projectWrapper}>
                <p>
                    Lorsqu'un utilisateur est connecté au site, les options de menu à sa disposition changent pour inclure "Rechercher des livres", une option pour afficher ses livres enregistrés et des options de "Déconnexion". Une fois connecté, si l'utilisateur saisit un terme de recherche dans le champ de saisie et clique sur le bouton Soumettre, une liste de résultats de recherche contenant le titre, l'auteur, la description, l'image et un lien vers le livre sur Google lui sera présentée. Site de livres. Chaque résultat de recherche comprendra également un bouton intitulé "Enregistrer ce livre", qui, une fois cliqué, enregistrera les informations du livre sur le compte de l'utilisateur pour référence future.
                </p>
            </div>

            <div className={styles.projectTitle }>
                <p>Page de visualisation des livres enregistrés</p>
            </div>      
                <a href="https://github.com/MiguelJerome/book-search-engine" target="_blank" rel="noopener noreferrer">
                <Image src={BookSearchLivresEnregistres} alt="BookSearchLivresEnregistres" className={styles.img} />
                </a>
            <div className={styles.projectWrapper}>
                <p>
                    Lorsque l'utilisateur clique sur l'option pour afficher ses livres enregistrés, une liste de tous les livres qu'il a enregistrés sur son compte lui sera présentée. Chaque livre comprendra le titre, l'auteur, la description, l'image et un lien vers le livre sur le site Web de Google Livres. Chaque livre comprendra également un bouton intitulé "Supprimer ce livre", lorsque vous cliquez dessus, supprimera ce livre de la liste des livres enregistrés de l'utilisateur.
                </p>
            </div>

        </section>   
        </>
    );
}