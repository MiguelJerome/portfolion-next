import Head from "next/head";
import Circle from "../components/Circle";

export default function AccueilPage() {
	return (
		<>
			<Head>
				<title>Miguel Jerome - Accueil</title>
				<meta name="description" content="Miguel Jerome - Accueil" />

				<meta property="og:title" content="Miguel Jerome - Accueil" />
				<meta property="og:description" content="Miguel Jerome - Accueil" />
				<meta
					property="og:image"
					content="http://localhost:3000/MiguelJerome.png"
				/>
			</Head>
			<Circle />
		</>
	);
}
