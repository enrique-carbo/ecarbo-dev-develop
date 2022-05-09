import { useState } from "react";
import Link from "next/link";

import { FaBars, FaCogs, FaCode } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";   
import { MdOutlineWeb } from "react-icons/md"
import { BiNews } from "react-icons/bi"
 
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

            <Link href="/">
                <a className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                  <span><img src="/img/logo-ecarbo-gray.svg" alt="ECarbo Logo" className="w-20 h-15 inline"/></span>
                  
                  <span className="text-sm">ECARBO</span>
                </a>
            </Link>  
            
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars/>
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

              <li className="nav-item">
                <Link href="/">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">   
                  <FaCogs className="text-lg leading-lg text-white opacity-75"/>  
                  <span className="ml-2">Solutions</span>
                </a>
                </Link>  
              </li>

              <li className="nav-item">
                <Link href="/about">  
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <SiAboutdotme className="text-lg leading-lg text-white opacity-75"/>  
                  <span className="ml-2">About</span>
                </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/portfolio">  
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <MdOutlineWeb className="text-lg leading-lg text-white opacity-75"/>  
                  <span className="ml-2">Portfolio</span>
                </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/technologies">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <FaCode className="text-lg leading-lg text-white opacity-75"/>  
                    <span className="ml-2">Technologies</span>
                    </a>  
                </Link>  
              </li>

              <li className="nav-item">
                <Link href="/news">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <BiNews className="text-lg leading-lg text-white opacity-75"/>  
                    <span className="ml-2">News</span>
                    </a>  
                </Link>  
              </li>



            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}