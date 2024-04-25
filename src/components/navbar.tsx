import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className=" container mx-auto flex justify-between items-center">
        <a href="" className="text-2xl font-bold">
          Portfolio
        </a>
        <div>
          <Link href="/" className="mx-3">
            Home
          </Link>
          <Link href="/works" className="mx-3">
            Works
          </Link>
          <Link href="/contact" className="mx-3">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
