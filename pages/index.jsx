import Accueil from "../components/Accueil"
import Apropos from "../components/Apropos"
import Projet1 from "../components/Projet1"
import Projet2 from "../components/Projet2"
import CV from "../components/CV"
import PageNotFound from "../components/NotFoundPage"

export default function Home({page}) {

  return(
    <>
      {renderPage(page)}
    </>
  );
}

const renderPage = (page) => {
  switch (page) {
    case 'Accueil':
      return <Accueil />;
    case 'Apropos':
      return <Apropos />;
    case 'Projet1':
      return <Projet1 />;
    case 'Projet2':
      return <Projet2 />;
    case 'CV':
      return <CV />;
    default:
      return <PageNotFound />;
  }
}