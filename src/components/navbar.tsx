"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="bg-gray-800 text-white p-4 sm:p-4 md:flex md:justify-between md:items-center">
        <div className=" container mx-auto flex justify-between items-center">
          <a href="/" className="text-white text-3xl font-extrabold">
            Portfolio
          </a>
          <div className="hidden md:flex">
            <Link href="/" className="mx-2 hover:bg-white hover:text-black rounded-md px-2 py-1">
              Home
            </Link>
            <Link href="/" className="mx-2 hover:bg-white hover:text-black rounded-md px-2 py-1">
              Works
            </Link>
            <Link href="/" className="mx-2 hover:bg-white hover:text-black rounded-md px-2 py-1">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
