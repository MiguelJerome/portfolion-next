import { useState } from "react"
import Accueil from "../components/Accueil"
import Apropos from "../components/Apropos"
import Projet1 from "../components/Projet1"
import Projet2 from "../components/Projet2"
import CV from "../components/CV"
import PageNotFound from "../components/NotFoundPage"

export default function Home() {
  const [page, setPage] = useState('Accueil');

  return(
    <>
      <button onClick={() => setPage('Accueil')}>Accueil</button>
      <button onClick={() => setPage('Apropos')}>A propos</button>
      <button onClick={() => setPage('Projet1')}>Projet1</button>
      <button onClick={() => setPage('Projet2')}>Projet2</button>
      <button onClick={() => setPage('CV')}>CV</button>
      <button onClick={() => setPage('NotFound')}>NotFound</button>
      {page === 'Accueil' &&  <Accueil />} 
      {page === 'Apropos' &&  <Apropos />} 
      {page === 'Projet1' &&  <Projet1 />} 
      {page === 'Projet2' &&  <Projet2 />} 
      {page === 'CV' &&  <CV />} 
      {page === 'NotFound' &&  ""} 
      {(page !== "Accueil" && page !== "Apropos" && page !== "Projet1" && page !== "Projet2" && page !== "CV") 
        && <PageNotFound />}  
    </>
  );
}