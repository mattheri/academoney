import { FC } from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: FC = () => {
return (
<footer className="bg-blue-500 text-white px-6 py-4">
<div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
<div className="w-full md:w-1/4 text-center md:text-left mb-4 md:mb-0">
<Logo width={90} height={90} />
</div>
    <div className="flex-1 md:flex md:w-1/2 justify-around">
      <div className="md:w-1/3">
        <h3 className="uppercase">Application mobile</h3>
        <ul className="text-sm">
          <li className="mt-2"><Link href="#">Fonctionnalités</Link></li>
          <li className="mt-2"><Link href="#">Partage en direct</Link></li>
        </ul>
      </div>
      <div className="md:w-1/3">
        <h3 className="uppercase">Communauté</h3>
        <ul className="text-sm">
          <li className="mt-2"><Link href="#">En vedette</Link></li>
          <li className="mt-2"><Link href="#">Le portail</Link></li>
        </ul>
      </div>
      <div className="md:w-1/3">
        <h3 className="uppercase">À propos de nous</h3>
        <ul className="text-sm">
          <li className="mt-2"><Link href="#">Entreprise</Link></li>
          <li className="mt-2"><Link href="#">Contactez-nous</Link></li>
          <li className="mt-2"><Link href="#">Histoire</Link></li>
        </ul>
      </div>
    </div>

    <div className="w-full md:w-1/4 text-center md:text-left mt-4 md:mt-0 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-2">
        <p>Suivez-nous :</p>
        <div className="flex items-center space-x-2">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>
    </div>
  </div>
</footer>
);
};
export default Footer;
