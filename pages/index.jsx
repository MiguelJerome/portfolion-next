import { useState } from "react"
import Acceuil from "../components/Accueil"
import Apropos from "../components/Apropos"
import Projet1 from "../components/Projet1"
import Projet2 from "../components/Projet2"
import CV from "../components/CV"
import PageNotFound from "../components/NotFoundPage"

export default function Home() {
  const [page, setPage] = useState('Acceuil');

  return(
    <>
      <button onClick={() => setPage('Acceuil')}>Acceuil</button>
      <button onClick={() => setPage('Apropos')}>A propos</button>
      <button onClick={() => setPage('Projet1')}>Projet1</button>
      <button onClick={() => setPage('Projet2')}>Projet2</button>
      <button onClick={() => setPage('CV')}>CV</button>
      <button onClick={() => setPage('NotFound')}>NotFound</button>
      {page === 'Acceuil' &&  <Acceuil />} 
      {page === 'Apropos' &&  <Apropos />} 
      {page === 'Projet1' &&  <Projet1 />} 
      {page === 'Projet2' &&  <Projet2 />}
      {page === 'CV' &&  <CV />}
      {page === 'NotFound' &&  ""}
      {(page !== "Acceuil" && page !== "Apropos" && page !== "Projet1" && page !== "Projet2" && page !== "CV") 
        && <PageNotFound />}  
    </>
  );
}