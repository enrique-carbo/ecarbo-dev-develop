import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs'


const Footer = () => {
    return ( 
        <footer className="text-center lg:text-left bg-blue-200 text-gray-800">
          <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300 bg-gray-200">
            <div className="mr-12 hidden lg:block">
                <span>Get connected on networks:</span>
            </div>
            <div className="flex justify-center">

                
                <a href="https://github.com/enrique-carbo" target="_blank" className="mr-6 text-gray-600 ">
                <AiFillGithub className="inline"/>
                <span className="ml-2">Github</span>
                </a>
                

                <a href="https://www.linkedin.com/in/enrique-carbo" target="_blank" className="mr-4 text-gray-600">
                <BsLinkedin className="inline"/>
                <span className="ml-2">Linkedin</span>
                </a>

                <a href="https://huggingface.co/ecarbo" target="_blank" className="text-gray-600">
                <span className="ml-2">🤗  Hugging Face</span>
                </a>

                               
          
            </div>
          </div>


            <div className="mx-6 py-10 text-center md:text-left">
              <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="">
                    <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
                      Software development
                    </h6>
                    <p>
                    Development solutions that are responsive, simple, fast, and cost effective. 
                    </p>
                    <p>I would like to thank <a target="_blank" href="https://www.freepik.com" className="font-bold">Freepik</a> for the images.</p>
                </div>

            <div>
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Solutions
                </h6>
                <p className="mb-4 text-gray-600">
                Web Development
                </p>
                <p className="mb-4 text-gray-600">
                PWA Aplications
                </p>
                <p className="mb-4 text-gray-600">
                Chatbots
                </p>
                <p className="mb-4 text-gray-600">
                RPA
                </p>
                <p className="text-gray-600"> 
                Machine Learning
                </p>
            </div>

            <div>
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Links
                </h6>
                <p className="mb-4">
                <Link href="/about">
                <a className="text-gray-600">About</a>
                </Link> 
                </p>

                <p className="mb-4">
                <Link href="/portfolio">
                <a className="text-gray-600">Portfolio</a>
                </Link>    
                </p>
                
                <p className="mb-4">
                <Link href="/blog">
                <a className="text-gray-600">Blog</a>
                </Link>    
                </p>
            </div>

            <div>
                <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Contact
                </h6>
                <p className="flex items-center justify-center md:justify-start mb-4">
                    enriquecarbo.d@gmail.com
                </p>
                
            </div>
            </div>
            </div>
            <div className="flex flex-row justify-center p-6 bg-gray-200">
                <p className="place-self-center">2022 - Enrique Carbó</p>
                <img src="/img/logo-ecarbo.svg" alt="ECarbo Logo" className="w-20 h-15 hover:animate-spin"/>
            </div>
        </footer>
     );
}
 
export default Footer;