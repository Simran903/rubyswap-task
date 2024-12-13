"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGem } from "react-icons/fa";
import Button from "./button";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="text-white px-6 py-4 flex items-center justify-between">

      <div className="flex items-center">
        <FaGem className="text-[#50FA7B] h-8 w-8 mr-2" />
        <span className="text-xl font-extrabold">rubyswap</span>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex space-x-8 text-sm font-medium">
          <li>
            <Link href="/" className={`pb-1 ${("/")}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/trade/exchange" className={`pb-1 ${("/trade")}`}>
              Trade
            </Link>
          </li>
          <li>
            <Link href="/farms" className={`pb-1 ${("/farms")}`}>
              Farms
            </Link>
          </li>
          <li>
            <Link href="/pools" className={`pb-1 ${("/pools")}`}>
              Pools
            </Link>
          </li>
          <li>
            <Link href="/prediction" className= "pb-1">
              Prediction
            </Link>
          </li>
          <li>
            <Link href="/collectibles" className="pb-1">
              Collectibles
            </Link>
          </li>
          <li>
            <span className="cursor-pointer hover:text-[#50FA7B]">More ▼</span>
          </li>
        </ul>
        <Button buttonText="Connect Wallet" className="bg-white text-black px-6 py-2 rounded-full" />
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-green-900 via-black to-green-900 text-white flex flex-col space-y-4 px-6 py-4 z-50">
          <Link href="/" className="pb-1" onClick={toggleMenu}>
            Home
          </Link>
          <Link
            href="/trade/exchange"
            className="pb-1"
            onClick={toggleMenu}
          >
            Trade
          </Link>
          <Link href="/farms" className="pb-1" onClick={toggleMenu}>
            Farms
          </Link>
          <Link href="/pools" className="pb-1" onClick={toggleMenu}>
            Pools
          </Link>
          <Link
            href="/prediction"
            className= "pb-1"
            onClick={toggleMenu}
          >
            Prediction
          </Link>
          <Link
            href="/collectibles"
            className="pb-1"
            onClick={toggleMenu}
          >
            Collectibles
          </Link>
          <Button
            buttonText="Connect Wallet"
            className="bg-white text-black w-full"
            onClick={toggleMenu}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;