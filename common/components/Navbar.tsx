import { FC } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import {  FaUserCircle } from 'react-icons/fa';

const Navbar: FC = () => {
  return (
    <nav className="bg-blue-500 text-white px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-full md:w-1/4 text-left">
          <Logo width={90} height={90} />
        </div>

        <div className="flex-1 md:flex md:w-1/2 justify-around">
          <Link href="#">Calendrier de paiements</Link>
          <Link href="#">Budget</Link>
          <Link href="#">Outils financiers</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Compte utilisateur</Link>
        </div>

        <div className="w-full md:w-1/4 text-right">
          <FaUserCircle className="inline text-2xl ml-4" />
          <span className="inline-block ml-2 text-red-500">1</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


