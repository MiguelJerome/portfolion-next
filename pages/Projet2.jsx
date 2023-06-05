import Head from "next/head";
import Image from "next/image";
import JeuVideoMain from "../public/JeuVideoMain.png";
import JeuVideoConnexion from "../public/JeuVideoConnexion.png";
import JeuVideoInscription from "../public/JeuVIdeoIncription.png";
import JeuVideoPageAcceuil from "../public/JeuVideoPageAcceuil.png";
import JeuVideoPageAdmin from "../public/JeuVideoPageAdmin.png";
import styles from "../styles/Projet2.module.css";

export default function Projet2() {
	return (
		<>
			<Head>
				<title>Jeu Video - Tournoi</title>
				<meta
					name="description"
					content="Projet tournoi de jeux vidéo avec système de connexion pour les joueurs et les administrateurs. Inclut pages de connexion, inscription, recherche et inscription à des tournois, et page d'administration pour créer et gérer des tournois."
				/>

				<meta property="og:title" content="Jeu Video - Tournoi" />
				<meta
					property="og:description"
					content="Projet tournoi de jeux vidéo avec système de connexion pour les joueurs et les administrateurs. Inclut pages de connexion, inscription, recherche et inscription à des tournois, et page d'administration pour créer et gérer des tournois."
				/>
				<meta
					property="og:image"
					content="http://localhost:3000/JeuVideoPageAcceuil.png"
				/>
			</Head>
			<main className={styles.container}>
				<div className={styles.projectWrapper}>
					<div className={styles.projectTitle}>
						<p>Tournoi de jeu vidéo</p>
					</div>
					<a
						href="https://jeuvideotournoi.onrender.com/connexion"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={JeuVideoMain}
							alt="JeuVideoMain"
							className={styles.img}
							priority={true}
						/>
					</a>
					<p>
						Mon Web site de tournoi de jeu vidéo contient un système de
						connexion pour l&apos;administrateur, lui permettant de créer et de
						supprimer des tournois et de spécifier des détails tels que le nom,
						la description, la date de début et le nombre de joueurs, permettant
						également aux utilisateurs de s&apos;inscrire et de se désinscrire
						des jeux.
					</p>
					<p>
						1. Connexion administrateur : contient un système de connexion pour
						l&apos;administrateur, pour lui permettre d&apos;accéder aux
						fonctionnalités de gestion du tournoi telles que :
					</p>
					<ul className={styles.ulProject2}>
						<li className={styles.liProject2}>
							Création de tournois : L&apos;administrateur aurait la possibilité
							de créer des tournois, notamment en précisant le nom, la
							description, la date de début et le nombre de joueurs.
						</li>
						<li className={styles.liProject2}>
							Suppression de tournois : l&apos;administrateur pourra supprimer
							les tournois qui ne sont plus nécessaires.
						</li>
					</ul>
					<p>
						2. Connexion du joueur : contient d&apos;un système de connexion
						pour l&apos;administrateur, afin de lui permettre d&apos;accéder à
						l&apos;inscription et à la désinscription du tournoi.
					</p>
					<ul className={styles.ulProject2}>
						<li className={styles.liProject2}>
							Inscription des joueurs : les utilisateurs pourront
							s&apos;inscrire aux tournois.
						</li>
						<li className={styles.liProject2}>
							Désinscription des joueurs : les utilisateurs pourront se
							désinscrire des tournois s&apos;ils ne sont plus en mesure de
							participer.
						</li>
					</ul>
				</div>
				<div className={styles.projectWrapper}>
					<div className={styles.projectTitle}>
						<p>Page de connexion</p>
					</div>
					<a
						href="https://jeuvideotournoi.onrender.com/connexion"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={JeuVideoConnexion}
							alt="JeuVideoConnexion"
							className={styles.img}
							priority={true}
						/>
					</a>
					<p>
						La &ldquo;page de connexion&rdquo; permet aux utilisateurs de se
						connecter &agrave; un compte existant. Cette page comprend des
						formulaires permettant de saisir les identifiants de connexion avec
						une adresse e-mail et un mot de passe et l&rsquo;option de
						r&eacute;initialiser le formulaire de connexion et de se connecter
						sur notre site Internet.
					</p>
				</div>
				<div className={styles.projectWrapper}>
					<div className={styles.projectTitle}>
						<p>Page d&rsquo;inscription</p>
					</div>
					<a
						href="https://jeuvideotournoi.onrender.com/connexion"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={JeuVideoInscription}
							alt="JeuVideoInscription"
							className={styles.img}
							priority={true}
						/>
					</a>
					<p>
						La &ldquo;page d&apos;inscription&rdquo; est l&rsquo;endroit
						o&ugrave; les utilisateurs peuvent cr&eacute;er un nouveau compte.
						Cette page comprend des formulaires permettant de saisir des
						informations personnelles telles que le nom, le pr&eacute;nom,
						l&rsquo;adresse e-mail et le mot de passe et l&rsquo;option de
						r&eacute;initialiser le formulaire d&rsquo;inscription. Le but
						d&rsquo;une page d&rsquo;inscription est de permettre aux
						utilisateurs de cr&eacute;er un nouveau compte et
						d&rsquo;acc&eacute;der &agrave; des fonctionnalit&eacute;s ou
						&agrave; du contenu personnalis&eacute;s sur notre site Web.
					</p>
				</div>
				<div className={styles.projectWrapper}>
					<div className={styles.projectTitle}>
						<p>Page d&rsquo;accueil</p>
					</div>
					<a
						href="https://jeuvideotournoi.onrender.com/connexion"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={JeuVideoPageAcceuil}
							alt="JeuVideoPageAcceuil"
							className={styles.img}
							priority={true}
						/>
					</a>
					<p>
						Cette page est conçue pour afficher tous les tournois disponibles
						auxquels un utilisateur peut s&apos;inscrire et affiche les
						attributs du tournoi tels que le numéro du tournoi, le nom, la
						description, la capacité et la date de début. Les utilisateurs
						peuvent également s&apos;inscrire à un tournoi via cette page. Le
						but de la page est de fournir un aperçu de tous les tournois
						disponibles et de permettre à un utilisateur de s&apos;inscrire
						facilement à un tournoi de son choix.
					</p>
				</div>
				<div className={styles.projectWrapper}>
					<div className={styles.projectTitle}>
						<p>Page d’administration pour créer un tournoi de jeu vidéo</p>
					</div>
					<a
						href="https://jeuvideotournoi.onrender.com/connexion"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src={JeuVideoPageAdmin}
							alt="JeuVideoPageAdmin"
							className={styles.img}
							priority={true}
						/>
					</a>
					<p>
						{" "}
						Une &ldquo;page d&apos;administration&rdquo; permet à un
						administrateur de gérer et de créer un tournoi de jeux vidéo. Cette
						page comprend des formulaires pour créer les détails du tournoi tels
						que le nom, la description, la date de début et la capacité et
						l&rsquo;option de réinitialiser le formulaire de créer un tournoi.
						Il peut également avoir des options pour gérer les tournois, les
						supprimer et afficher les données des tournois. Le but d&rsquo;une
						page d&apos;administration est de permettre à un administrateur de
						créer et de gérer un tournoi de jeux vidéo, garantissant ainsi un
						événement fluide et bien organisé pour les participants.
					</p>
				</div>
			</main>
		</>
	);
}
