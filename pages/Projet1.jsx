import Image from "next/image";
import GoogleSearchMain from "../public/BookSearchGogleMain.png";
import BookSearchConnexion from "../public/BookSearchConnexion.png";
import BookSearchInscription from "../public/BookSearchInscription.png";
import BookSearchPageRecherche from "../public/BookSearchPageRecherche.png";
import BookSearchLivresEnregistres from "../public/BookSearchLivresEnregistres.png";
import styles from "../styles/Projet1.module.css";

export default function Projet1() {
	return (
		<>
			<main className={styles.container}>
				<div className={styles.projectWrapper}>
					<div className={styles.projectTitle}>
						<p>Google Books API Search Engine</p>
					</div>
					<div className={styles.imgWrapper}>
						<a
							href="https://github.com/MiguelJerome/book-search-engine"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={GoogleSearchMain}
								alt="GoogleSearchMain"
								className={styles.img}
								layout="responsive"
								loading="lazy"
								priority
							/>
						</a>
					</div>
					<p>
						Ce projet permet aux développeurs d&apos;accéder et de rechercher
						dans la base de données Google Books et à l&apos;aide de l&apos;API
						Google Books. L&apos;application a été créée à l&apos;aide de la
						pile MERN, avec un front-endl React, une base de données MongoDB, un
						serveur et une API Node.js/Express.js. Il est déjà configuré pour
						permettre aux utilisateurs d&apos;enregistrer des recherches de
						livres dans le back-end. De plus, l&apos;API peut également être
						utilisée pour accéder aux aperçus de livres et au texte intégral des
						livres qui ont été numérisés par Google.
					</p>
				</div>
				<div className={styles.projectWrapper}>
					<div className={styles.projectTitle}>
						<p>Page de connexion</p>
					</div>
					<div className={styles.imgWrapper}>
						<a
							href="https://github.com/MiguelJerome/book-search-engine"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={BookSearchConnexion}
								alt="BookSearchConnexion"
								className={styles.img}
								layout="responsive"
								loading="lazy"
								priority
							/>
						</a>
					</div>
					<p>
						La &quot;page de connexion&quot; permet aux utilisateurs de se
						connecter à un compte existant. Cette page comprend des formulaires
						permettant de saisir les identifiants de connexion avec une adresse
						e-mail et un mot de passe de se connecter sur notre site Internet.
					</p>
				</div>

				<div className={styles.projectWrapper}>
					<div className={styles.projectTitle}>
						<p>Page d’inscription</p>
					</div>
					<div className={styles.imgWrapper}>
						<a
							href="https://github.com/MiguelJerome/book-search-engine"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={BookSearchInscription}
								alt="BookSearchInscription"
								className={styles.img}
								layout="responsive"
								loading="lazy"
								priority
							/>
						</a>
					</div>
					<p>
						La &quot;page d&apos;inscription&quot; est l&apos;endroit où les
						utilisateurs peuvent créer un nouveau compte. Cette page comprend
						des formulaires permettant de saisir des informations personnelles
						telles que le nom, l&apos;adresse e-mail et le mot de passe. Le but
						d&apos;une page d&apos;inscription est de permettre aux utilisateurs
						de créer un nouveau compte et d&apos;accéder à des fonctionnalités
						ou à du contenu personnalisés sur notre site Web.
					</p>
				</div>
				<div className={styles.projectWrapper}>
					<div className={styles.projectTitle}>
						<p>Page de recherche de livre</p>
					</div>
					<div className={styles.imgWrapper}>
						<a
							href="https://github.com/MiguelJerome/book-search-engine"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={BookSearchPageRecherche}
								alt="BookSearchPageRecherche"
								className={styles.img}
								layout="responsive"
								loading="lazy"
								priority
							/>
						</a>
					</div>
					<p>
						Lorsqu&apos;un utilisateur est connecté au site, les options de menu
						à sa disposition changent pour inclure &quot;Rechercher des
						livres&quot;, une option pour afficher ses livres enregistrés et des
						options de &quot;Déconnexion&quot;. Une fois connecté, si
						l&apos;utilisateur saisit un terme de recherche dans le champ de
						saisie et clique sur le bouton Soumettre, une liste de résultats de
						recherche contenant le titre, l&apos;auteur, la description,
						l&apos;image et un lien vers le livre sur Google lui sera présentée.
						Site de livres. Chaque résultat de recherche comprendra également un
						bouton intitulé &quot;Enregistrer ce livre&quot;, qui, une fois
						cliqué, enregistrera les informations du livre sur le compte de
						l&apos;utilisateur pour référence future.
					</p>
				</div>
				<div className={styles.projectWrapper}>
					<div className={styles.projectTitle}>
						<p>Page de visualisation des livres enregistrés</p>
					</div>
					<div className={styles.imgWrapper}>
						<a
							href="https://github.com/MiguelJerome/book-search-engine"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={BookSearchLivresEnregistres}
								alt="BookSearchLivresEnregistres"
								className={styles.img}
								layout="responsive"
								loading="lazy"
								priority
							/>
						</a>
					</div>
					<p>
						Lorsque l&apos;utilisateur clique sur l&apos;option pour afficher
						ses livres enregistrés, une liste de tous les livres qu&apos;il a
						enregistrés sur son compte lui sera présentée. Chaque livre
						comprendra le titre, l&apos;auteur, la description, l&apos;image et
						un lien vers le livre sur le site Web de Google Livres. Chaque livre
						comprendra également un bouton intitulé &quot;Supprimer ce
						livre&quot;, lorsque vous cliquez dessus, supprimera ce livre de la
						liste des livres enregistrés de l&apos;utilisateur.
					</p>
				</div>
			</main>
		</>
	);
}
