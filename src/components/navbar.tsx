"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGem } from "react-icons/fa";
import Button from "./button";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "border-b-2 border-white"
      : "hover:text-[#50FA7B]";

  return (
    <nav className="text-white px-6 py-4 flex items-center justify-between">

      <div className="flex items-center">
        <FaGem className="text-[#50FA7B] h-8 w-8 mr-2" />
        <span className="text-xl font-extrabold">rubyswap</span>
      </div>

      <div className="flex items-center space-x-6">
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <Link href="/" className={`pb-1 ${isActive("/")}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/trade/exchange" className={`pb-1 ${isActive("/trade")}`}>
              Trade
            </Link>
          </li>
          <li>
            <Link href="#" className={`pb-1 ${isActive("/farms")}`}>
              Farms
            </Link>
          </li>
          <li>
            <Link href="#" className={`pb-1 ${isActive("/pools")}`}>
              Pools
            </Link>
          </li>
          <li>
            <Link href="#" className={`pb-1 ${isActive("/prediction")}`}>
              Prediction
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`pb-1 ${isActive("/collectibles")}`}
            >
              Collectibles
            </Link>
          </li>
          <li>
            <span className="cursor-pointer hover:text-[#50FA7B]">More ▼</span>
          </li>
        </ul>

        <Button buttonText="Connect Wallet" className="bg-white text-black" />
      </div>

      <div className="md:hidden">
        <button className="text-white focus:outline-none">
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

    </nav>
  );
};

export default Navbar;