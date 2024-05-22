import { FC } from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import { FaUserCircle } from 'react-icons/fa';

const Navbar: FC = () => {
  return (
    <nav className="bg-blue-500 text-white px-6 py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/4 text-left">
          <Logo width={90} height={90} />
        </div>

        <div className="flex-1 md:flex md:w-1/2 justify-around">
          <Link href="#" className="p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-gray-300 hover:border-2 hover:border-white rounded">Calendrier</Link>
          <Link href="#" className="p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-gray-300 hover:border-2 hover:border-white rounded">Budget</Link>
          <Link href="#" className="p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-gray-300 hover:border-2 hover:border-white rounded">Outils financiers</Link>
          <Link href="#" className="p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-gray-300 hover:border-2 hover:border-white rounded">Contact</Link>
          <Link href="#" className="p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-gray-300 hover:border-2 hover:border-white rounded">Mon profil</Link>
        </div>

        <div className="w-full md:w-1/4 text-right">
          <FaUserCircle className="inline text-2xl ml-4 hover:text-red-500 transition duration-200" />
          <span className="inline-block ml-2 text-red-500">1</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;