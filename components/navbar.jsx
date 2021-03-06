import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import Image from "next/image";

//i18n
import en from "../i18n/en"
import es from "../i18n/es"


// Icons and images
import { FaBars, FaCogs, FaCode } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";   
import { MdOutlineWeb, MdClose } from "react-icons/md"
import { BiNews } from "react-icons/bi"
import logoGray from "../public/img/logo-ecarbo-gray.svg"

 
export default function Navbar() {
  
  const [navbarOpen, setNavbarOpen] = useState(false)

  const { locale } = useRouter()
  const i18n = locale === "en" ? en : es



  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500">
        <div className="container px-4 mx-auto flex flex-wrap justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

            <Link href="/">
                <a className="font-bold leading-relaxed inline-flex items-center mr-4 py-2 whitespace-nowrap uppercase text-white">
                  <Image src={logoGray} alt="ECarbo Logo" width={70} height={70} className="scale-150"/>
                  <span className="text-sm">ECARBO</span>
                </a>
            </Link>  
            
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <MdClose/> : <FaBars/>}
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

              <li className="nav-item">
                <Link href="/">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">   
                  <FaCogs className="text-lg leading-lg text-white opacity-75"/>  
                  <span className="ml-2"> { i18n.componentNavbar.tab1 } </span>
                </a>
                </Link>  
              </li>

              <li className="nav-item">
                <Link href="/about">  
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <SiAboutdotme className="text-lg leading-lg text-white opacity-75"/>  
                  <span className="ml-2"> { i18n.componentNavbar.tab2 } </span>
                </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/portfolio">  
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <MdOutlineWeb className="text-lg leading-lg text-white opacity-75"/>  
                  <span className="ml-2"> { i18n.componentNavbar.tab3 } </span>
                </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/technologies">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <FaCode className="text-lg leading-lg text-white opacity-75"/>  
                    <span className="ml-2">{ i18n.componentNavbar.tab4 }</span>
                    </a>  
                </Link>  
              </li>

              <li className="nav-item">
                <Link href="/news">
                    <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    <BiNews className="text-lg leading-lg text-white opacity-75"/>  
                    <span className="ml-2">{ i18n.componentNavbar.tab5 }</span>
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