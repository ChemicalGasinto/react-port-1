import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white sticky top-0">
      <h1 className="text-xl font-bold">MyPortfolio</h1>
      <ul className="hidden md:flex gap-6">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
