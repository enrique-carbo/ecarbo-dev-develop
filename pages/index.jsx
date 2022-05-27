import Layout from '../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'

//i18n
import en from "../i18n/en"
import es from "../i18n/es"


export default function Home() {
  
  
  const { locale } = useRouter()
  const i18n = locale === "en" ? en : es
  
  

  return (

    <Layout
    title="Home | ECarbo"
    >

    <header className="relative overflow-hidden text-white bg-gradient-to-r from-sky-400 to-blue-700">
        <div className="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2">
          <div className="flex justify-center md:justify-end">
            <Image src="/img/logo-ecarbo.svg" alt="Logo image" height={100} width={170} 
            className="transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-150 duration-500"></Image>
          </div>  
      
          <div className="flex justify-center md:justify-start">
            <h1 className="text-5xl pt-5 font-mono font-bold mb-5">
            ECARBO        
            </h1>
          </div>
        </div>
   
         <h3 className="text-4xl italic text-center font-serif">
           { i18n.pagesIndex.headerTitle }
         </h3>
        </div>

        <div className="absolute inset-0 w-full h-full mix-blend-multiply">
          <video autoPlay loop muted className="absolute inset-0 object-cover object-top w-full h-full">
            <source src="/video/header_video.mp4" type='video/mp4' />
          </video>
        </div>
    </header>

    <div>
      <div className="grid md:grid-cols-2 gap-4 m-10">

        <div className="flex justify-center">
        <Image src="/img/842.png" alt="Image from computers" height={400} width={400} className="rounded-lg"></Image>
        </div>
        
        <div>
          <p className="text-xl uppercase text-center font-bold mb-5">
            { i18n.pagesIndex.section1Title }
          </p>
          <p className="font-mono text-lg">
            { i18n.pagesIndex.section1Div1Text1 }  
          <span className="font-semibold">
            { i18n.pagesIndex.section1Div1Text2 }
          </span> 
            { i18n.pagesIndex.section1Div1Text3 }
          <span className="font-semibold">
            { i18n.pagesIndex.section1Div1Text4 }
          </span> { i18n.pagesIndex.section1Div1Text5} </p>

          <p className="font-mono text-lg mt-3">
            { i18n.pagesIndex.section1Div2Text1 }
          </p>
          <p className="font-mono text-lg mt-3">
            { i18n.pagesIndex.section1Div3Text1 }
          </p>
        </div>
      </div>
    </div>

    <div>
      <div className="grid md:grid-cols-2 gap-4 m-10">

        <div className="flex justify-center">
        <Image src="/img/844.png" alt="Image from computers" height={400} width={400} className="rounded-lg"></Image>
        </div>
        
        <div>
          <p className="text-xl uppercase text-center font-bold mb-5">
            { i18n.pagesIndex.section2Title }
          </p>
          <p className="font-mono text-lg">
            { i18n.pagesIndex.section2P1 }
          </p>
          <p className="font-mono text-lg mt-3">
            { i18n.pagesIndex.section2P2 }
          </p>
          <p className="font-mono text-lg mt-3">
            { i18n.pagesIndex.section2P3 } 
          <span className="font-semibold">
            { i18n.pagesIndex.section2P4 }
          </span> 
            { i18n.pagesIndex.section2P5 }
          </p>

        </div>
      </div>
    </div>

    
    <aside className="relative overflow-hidden text-white bg-gradient-to-r from-sky-400 to-blue-700">
        <div className="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              { i18n.pagesIndex.asideH21 }
              <span className="block">
              { i18n.pagesIndex.asideH22 }
              </span>
            </h2>

            <p className="hidden sm:block sm:max-w-lg sm:ml-auto sm:text-lg">
              { i18n.pagesIndex.asideH23 } 
            </p>

            <a className="inline-flex items-center px-6 py-3 font-medium bg-black rounded-full hover:opacity-75" 
                href="https://github.com/enrique-carbo" 
                target="_blank"
                rel="noreferrer">
              Github
            </a>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full mix-blend-multiply">
          <img
            src="/img/code-laptop.jpg"
            alt="Code laptop"
            className="absolute inset-0 object-cover object-top w-full h-full"
          />
        </div>
      </aside>

    <div>
      <div className="grid md:grid-cols-2 gap-4 m-10 mt-20">

        <div className="flex justify-center">
        <Image src="/img/chatbot.png" alt="Image from computers" height={400} width={400} className="rounded-lg"></Image>
        </div>
        
        <div>
          <p className="text-xl uppercase text-center font-bold mb-5">Chatbots</p>
          <p className="font-mono text-lg">
            { i18n.pagesIndex.section3P1 }
          </p>
          <p className="font-mono text-lg mt-3">
          { i18n.pagesIndex.section3P2 }
          </p>
        </div>
      </div>
    </div>

    <div>
      <div className="grid md:grid-cols-2 gap-4 m-10 mt-20">
                
        <div className="lg:ml-10">
          <p className="text-xl uppercase text-center font-bold mb-5">
            { i18n.pagesIndex.section4Title }
          </p>
          <p className="font-mono text-lg">
           { i18n.pagesIndex.section4P1 }
          <span className="font-semibold">{ i18n.pagesIndex.section4P2 }</span> 
          { i18n.pagesIndex.section4P3 }</p>
          <p className="font-mono text-lg mt-3">
          { i18n.pagesIndex.section4P4 }  
          </p>
          <p className="font-mono text-lg mt-3">
          { i18n.pagesIndex.section4P5 }
          </p>
        </div>

        <div className="flex justify-center">
        <Image src="/img/rpa.jpg" alt="Image from computers" height={400} width={500} className="rounded-lg"></Image>
        </div>
      </div>
    </div>

    <aside
      className="overflow-hidden text-white lg:grid bg-gradient-to-r from-sky-500 to-blue-800 lg:grid-cols-2 lg:items-center"
    >
      <div className="p-12 text-center sm:p-16 lg:p-24 lg:text-left">
        <div className="max-w-lg mx-auto lg:ml-0 lg:pt-12">
          <p className="text-3xl font-bold sm:text-4xl">
            { i18n.pagesIndex.aside2P1 }
          </p>

          <p className="mt-4">
            { i18n.pagesIndex.aside2P2 }
          </p>
        </div>
      </div>

      <div className="lg:pt-24">
        <div className="relative w-full h-64 sm:h-96 lg:h-[500px]">
          <img
            className="absolute inset-0 object-cover w-full h-full lg:rounded-tl-3xl"
            src="/img/brain-technology.jpg"
            alt="Artificial Intelligence"
          />
        </div>
      </div>
    </aside>

    <div>
      <div className="grid md:grid-cols-2 gap-4 m-10 mt-10">
                
        <div className="lg:ml-10">
          <p className="text-xl uppercase text-center font-bold mb-5">
            { i18n.pagesIndex.section5Title }
          </p>
          <p className="font-mono text-lg">
            { i18n.pagesIndex.section5P1 }
          </p>
          <p className="font-mono text-lg mt-3">
            { i18n.pagesIndex.section5P2 }
          </p>
          <p className="font-mono text-lg mt-3">
            { i18n.pagesIndex.section5P3 }  
          </p>
        </div>

        <div className="flex justify-center">
        <Image src="/img/ai.png" alt="Image from computers" height={400} width={500} className="rounded-lg"></Image>
        </div>
      </div>
    </div>

    


    </Layout>
    
  )
}
