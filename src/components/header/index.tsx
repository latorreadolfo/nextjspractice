"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Fechar o menu quando clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#BE0F0F] text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo SVG importada */}
        <div className="flex items-center">
          <Image
            src="/assets/mapfrelogo.png"
            alt="MAPFRE Logo"
            width={100}
            height={40}
            className="mr-3"
          />
        </div>
        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-400 font-kanit">
            Home
          </Link>
          <Link href="/polizas" className="hover:text-gray-400 font-kanit">
            Pólizas
          </Link>
          <Link
            href="https://www.mapfre.com.py/contacto/"
            className="hover:text-gray-400 font-kanit"
          >
            Contacto
          </Link>
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white font-kanit"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <rect width="80" height="10" rx="5" fill="white" />
              <rect y="30" width="80" height="10" rx="5" fill="white" />
              <rect y="60" width="80" height="10" rx="5" fill="white" />
            </svg>
          </button>

          {isMenuOpen && (
            <ul className="absolute right-0 top-12 bg-[#BE0F0F] text-white py-4 w-48 rounded-lg shadow-lg">
              <li className="px-4 py-2">
                <Link
                  href="/"
                  className="hover:text-gray-400 font-kanit"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="px-4 py-2">
                <Link
                  href="/polizas"
                  className="hover:text-gray-400 font-kanit"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pólizas
                </Link>
              </li>
              <li className="px-4 py-2">
                <Link
                  href="https://www.mapfre.com.py/contacto/"
                  className="hover:text-gray-400 font-kanit"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
