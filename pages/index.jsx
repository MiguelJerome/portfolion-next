import { useState } from "react"
import Bio from "../components/Bio";
import Circle from "../components/Circle";
import Acceuil from "../components/Acceuil"
import Apropos from "../components/Apropos"
import Projet1 from "../components/Projet1"
import Projet2 from "../components/Projet2"
import CV from "../components/CV"
import PageNotFound from "../components/NotFoundPage"

export default function Home() {
  const [page, setPage] = useState('Acceuil');

  return <>
  <button onClick={() => setPage('Acceuil')}>Acceuil</button>
  <button onClick={() => setPage('Apropos')}>A propos</button>
  <button onClick={() => setPage('Projet1')}>Projet1</button>
  <button onClick={() => setPage('Projet2')}>Projet2</button>
  <button onClick={() => setPage('CV')}>CV</button>
  {page === 'Acceuil' &&  <Acceuil />} 
  {page === 'Apropos' &&  <Apropos />} 
  {page === 'Projet1' &&  <Projet1 />} 
  {page === 'Projet2' &&  <Projet2 />}
  {page === 'CV' &&  <CV />}
  {(page !== "Acceuil" && page !== "Apropos" && page !== "Projet1" && page !== "Projet2" && page !== "CV") 
    && <PageNotFound />}
   
  </>
}