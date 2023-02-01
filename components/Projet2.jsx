import Image from 'next/image';
import JeuVideoMain from '../public/JeuVideoMain.png';
import JeuVideoConnexion from '../public/JeuVideoConnexion.png';
import JeuVideoInscription from '../public/JeuVIdeoIncription.png';
import JeuVideoPageAcceuil from '../public/JeuVideoPageAcceuil.png';
import JeuVideoPageAdmin from '../public/JeuVideoPageAdmin.png';
import styles from '../styles/Projet2.module.css';

export default function Projet2() {
return(
        <>      
            <section className={styles.container}>
                <div className={styles.projectWrapper}>
                    <div className={styles.projectTitle }>
                        <p>Tournoi de jeu vidéo</p>
                    </div>      
                            <a href="https://github.com/MiguelJerome/Jeu-video-tournoi" target="_blank" rel="noopener noreferrer">
                            <Image src={JeuVideoMain} alt="JeuVideoMain" className={styles.img} />
                            </a>
                        <p>
                        Mon Web site de tournoi de jeu vidéo contient un système de connexion pour l'administrateur, lui permettant de créer et de supprimer des tournois et de spécifier des détails tels que le nom, la description, la date de début et le nombre de joueurs, permettant également aux utilisateurs de s'inscrire et de se désinscrire des jeux.
                        </p>
                        <p>
                            1. Connexion administrateur : contient un système de connexion pour l'administrateur, pour lui permettre d'accéder aux fonctionnalités de gestion du tournoi telles que :
                        </p>
                        <ul className={styles.ulProject2}>
                            <li className={styles.liProject2}>Création de tournois : L'administrateur aurait la possibilité de créer des tournois, notamment en précisant le nom, la description, la date de début et le nombre de joueurs.</li>
                            <li className={styles.liProject2}>Suppression de tournois : l'administrateur pourra supprimer les tournois qui ne sont plus nécessaires.</li>
                        </ul>
                        <p>
                            2. Connexion du joueur : contient d'un système de connexion pour l'administrateur, afin de lui permettre d'accéder à l'inscription et à la désinscription du tournoi.
                        </p>
                        <ul className={styles.ulProject2}>
                            <li className={styles.liProject2}>Inscription des joueurs : les utilisateurs pourront s'inscrire aux tournois.</li>
                            <li className={styles.liProject2}>Désinscription des joueurs : les utilisateurs pourront se désinscrire des tournois s'ils ne sont plus en mesure de participer.</li>
                        </ul>
                </div>
                <div className={styles.projectWrapper}>
                    <div className={styles.projectTitle }>
                        <p>Page de connexion</p>
                    </div>      
                        <a href="https://github.com/MiguelJerome/Jeu-video-tournoi" target="_blank" rel="noopener noreferrer">
                        <Image src={JeuVideoConnexion} alt="JeuVideoConnexion" className={styles.img} />
                        </a>
                       <p>La "page de connexion" permet aux utilisateurs de se connecter à un compte existant. Cette page comprend des formulaires permettant de saisir les identifiants de connexion avec une adresse e-mail et un mot de passe et l’option de réinitialiser le formulaire de connexion et de se connecter sur notre site Internet.</p>
                </div>
                <div className={styles.projectWrapper}>
                    <div className={styles.projectTitle }>
                        <p>Page d’inscription</p>
                    </div>      
                        <a href="https://github.com/MiguelJerome/Jeu-video-tournoi" target="_blank" rel="noopener noreferrer">
                        <Image src={JeuVideoInscription} alt="JeuVideoInscription" className={styles.img} />
                        </a>
                       <p> La "page d'inscription" est l'endroit où les utilisateurs peuvent créer un nouveau compte. Cette page comprend des formulaires permettant de saisir des informations personnelles telles que le nom, le prénom, l'adresse e-mail et le mot de passe et l’option de réinitialiser le formulaire d’inscription. Le but d'une page d'inscription est de permettre aux utilisateurs de créer un nouveau compte et d'accéder à des fonctionnalités ou à du contenu personnalisés sur notre site Web.</p>
                </div>
                <div className={styles.projectWrapper}>
                    <div className={styles.projectTitle }>
                        <p>Page d’accueil</p>
                    </div>      
                        <a href="https://github.com/MiguelJerome/Jeu-video-tournoi" target="_blank" rel="noopener noreferrer">
                        <Image src={JeuVideoPageAcceuil} alt="JeuVideoPageAcceuil" className={styles.img} />
                        </a>
                        <p>Cette page est conçue pour afficher tous les tournois disponibles auxquels un utilisateur peut s'inscrire et affiche les attributs du tournoi tels que le numéro du tournoi, le nom, la description, la capacité et la date de début. Les utilisateurs peuvent également s'inscrire à un tournoi via cette page. Le but de la page est de fournir un aperçu de tous les tournois disponibles et de permettre à un utilisateur de s'inscrire facilement à un tournoi de son choix.</p>
                </div>
                <div className={styles.projectWrapper}>
                    <div className={styles.projectTitle }>
                        <p>Page d’administration pour créer un tournoi de jeu vidéo</p>
                    </div>      
                        <a href="https://github.com/MiguelJerome/Jeu-video-tournoi" target="_blank" rel="noopener noreferrer">
                        <Image src={JeuVideoPageAdmin} alt="JeuVideoPageAdmin" className={styles.img} />
                        </a>
                       <p> Une "page d'administration" permet à un administrateur de gérer et de créer un tournoi de jeux vidéo. Cette page comprend des formulaires pour créer les détails du tournoi tels que le nom, la description, la date de début et la capacité et l’option de réinitialiser le formulaire de créer un tournoi. Il peut également avoir des options pour gérer les tournois, les supprimer et afficher les données des tournois. Le but d'une page d'administration est de permettre à un administrateur de créer et de gérer un tournoi de jeux vidéo, garantissant ainsi un événement fluide et bien organisé pour les participants.</p>
                </div>
            </section>   
        </>
    );
}