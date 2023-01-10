import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

//i18n
import en from "../i18n/en"
import es from "../i18n/es"

//Icons
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs'

//Components
import Quotes from './quotes';
import SelectorInt from './selector-i18n';


const Footer = () => {
    const { locale } = useRouter()
    const i18n = locale === "en" ? en : es

    return ( 
        <footer className="text-center lg:text-left bg-blue-200 text-gray-800">
          <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300 bg-gray-200">
            <div className="mr-12 hidden lg:block">
                <span> { i18n.componentFooter.getConnected } </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-2">

                <Link href="https://github.com/enrique-carbo">
                <a target="_blank" rel="noreferrer" className="mr-6 text-gray-600 flex item-center">
                <Image src="/img/github.svg" width={30} height={30}/>
                <span className="ml-2 mt-2">Github</span>
                </a>
                </Link>
                
                <Link href="https://www.linkedin.com/in/enrique-carbo">
                <a target="_blank" rel="noreferrer" className="mr-4 text-gray-600 flex item-center">
                <Image src="/img/linkedin.svg" width={30} height={30}/>
                <span className="ml-2 mt-2">Linkedin</span>
                </a>
                </Link>

                <Link href="https://huggingface.co/ecarbo">
                <a target="_blank" rel="noreferrer" className="text-gray-600 flex item-center">
                <Image src="/img/hugging-face.svg" width={30} height={30}/>
                <span className='ml-2 mt-2'>Hugging Face</span>
                </a>
                </Link>
         
            </div>
          </div>


            <div className="mx-6 py-10 text-center md:text-left">
              <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
                      { i18n.componentFooter.column1Title }
                    </h6>
                    <p>
                        { i18n.componentFooter.column1Text1 }
                    </p>
                    <p> { i18n.componentFooter.column1Text2}
                    <a target="_blank" rel="noreferrer" href="https://www.freepik.com" className="font-bold"> Freepik</a> , 
                    <a target="_blank" rel="noreferrer" href="https://unsplash.com" className="font-bold"> Unsplash </a>
                     { i18n.componentFooter.column1Text3 }
                    <a target="_blank" rel="noreferrer" href="https://unsplash.com" className="font-bold"> Pexels </a>
                    { i18n.componentFooter.column1Text4 }.</p>

                    <div className="mt-5 flex items-center justify-center md:justify-start">
                        <SelectorInt />
                    </div>
                </div>

            <div>
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                { i18n.componentFooter.column2Title }
                </h6>
                <p className="mb-4 text-gray-600">
                { i18n.componentFooter.column2Text1 }
                </p>
                <p className="mb-4 text-gray-600">
                { i18n.componentFooter.column2Text2 }
                </p>
                <p className="mb-4 text-gray-600">
                { i18n.componentFooter.column2Text3 }
                </p>
                <p className="mb-4 text-gray-600">
                { i18n.componentFooter.column2Text4 }
                </p>
                <p className="text-gray-600"> 
                { i18n.componentFooter.column2Text5 }
                </p>
            </div>

            <div>
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                { i18n.componentFooter.column3Title }
                </h6>
                <p className="mb-4">
                <Link href="/about">
                <a className="text-gray-600"> { i18n.componentFooter.column3Text1 } </a>
                </Link> 
                </p>

                <p className="mb-4">
                <Link href="/portfolio">
                <a className="text-gray-600"> { i18n.componentFooter.column3Text2 } </a>
                </Link>    
                </p>

                <p className="mb-4">
                <Link href="/technologies">
                <a className="text-gray-600"> { i18n.componentFooter.column3Text3 }</a>
                </Link>    
                </p>
                
                <p className="mb-4">
                <Link href="/news">
                <a className="text-gray-600"> { i18n.componentFooter.column3Text4 }</a>
                </Link>    
                </p>
            </div>

            <div>
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                { i18n.componentFooter.column4Title }
                </h6>
                <p className="flex items-center justify-center md:justify-start mb-4">
                    enriquecarbo.d@gmail.com
                </p>

                <div className="mt-8">
                    <Quotes/>
                </div>
                
            </div>

            </div>
            </div>
            <div className="flex flex-row justify-center p-6 bg-gray-200">
                <p className="place-self-center">2023 - Enrique Carbó</p>
                <img src="/img/logo-ecarbo.svg" alt="ECarbo Logo" className="w-20 h-15 hover:animate-spin"/>
            </div>
        </footer>
     );
}
 
export default Footer;