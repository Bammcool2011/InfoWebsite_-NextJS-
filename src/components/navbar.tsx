"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sm:p-4 md:flex md:justify-between md:items-center">
      <div className=" container mx-auto flex justify-between items-center">
        <a href="" className="text-2xl font-bold">
          Portfolio
        </a>
        <div className="hidden md:flex">
          <Link href="/" className="mx-3 hover:text-gray-300">
            Home
          </Link>
          <Link href="/works" className="mx-3 hover:text-gray-300">
            Works
          </Link>
          <Link href="/contact" className="mx-3 hover:text-gray-300">
            Contact
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleNavbar}>
            {isClick ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-1 pt-2 pb-3 space-y-3 sm:px-2">
            <Link href="/" className="mx-3 block hover:text-gray-300">
              Home
            </Link>
            <Link href="/works" className="mx-3 block hover:text-gray-300">
              Works
            </Link>
            <Link href="/contact" className="mx-3 block hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
