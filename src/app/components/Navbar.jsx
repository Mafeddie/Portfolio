"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon } from "@heroicons/react/20/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 ">
        {/* <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        > */}
            <Image
              src="./logo.png"
              alt="logo"
              className=" rounded-full top-1/2 left-1/2"
              width={30}
              height={30}
            ></Image>
        
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button 
            onClick={()=> setNavbarOpen(true)}
            className="items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white  text-slate-200 flex ">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button 
            onClick={()=> setNavbarOpen(false)}
            className="items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white  text-slate-200 flex ">
              {/* <XmarkIcon className="h-5 w-5"/> */}
              {/* import error qiuick fixed */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <MenuOverlay links={navLinks} /> console.info('Menu triggered')*/}
      {navbarOpen ? <MenuOverlay links={navLinks} />      : console.info("not open")}
    </nav>
  );
};

export default Navbar;
