import Link from 'next/link';

function MenuBoutonSousTitre({ href, children }) {
  return (
    <Link href={href}>
      {children}
    </Link>
  );
}

export default MenuBoutonSousTitre;
