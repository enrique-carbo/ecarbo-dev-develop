import Layout from "../components/Layout";
import Image from "next/image";
import { useRouter } from 'next/router'

//i18n
import en from "../i18n/en"
import es from "../i18n/es"

const About = () => {
    const { locale } = useRouter()
    const i18n = locale === "en" ? en : es

    return ( 
        <Layout
        title="About | ECarbo"
        >
        
        <header className="relative overflow-hidden text-white bg-gradient-to-r from-sky-400 to-blue-700">
        <div className="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              { i18n.pagesAbout.headerTitle }
            </h2>
         </div>
        </div>

        <div className="absolute inset-0 w-full h-full mix-blend-multiply">
          <img
            src="/img/modern-background.jpg"
            alt="Background image"
            className="absolute inset-0 object-cover object-top w-full h-full"
          />
        </div>
        </header>



        <div className="grid md:grid-cols-2 gap-4 my-10">
            <div className="flex justify-center md:justify-end max-h-80 mt-10">
                <Image src="/img/anime-ecarbo.png" alt="Developer image" height={300} width={300} 
                className="rounded-full hover:saturate-50 transition-all"></Image>
            </div>
            <div className="rounded-lg shadow-lg m-5 p-10">
                <p className="text-lg mb-2"> { i18n.pagesAbout.section1P1 }
                <span className="text-blue-600 font-bold">Enrique Carbó</span>
                { i18n.pagesAbout.section1P2 }
                </p>
                <p className="text-lg mb-2">
                { i18n.pagesAbout.section1P3 }  
                </p>
                <p className="text-lg mb-2"> { i18n.pagesAbout.section1P4 }
                <span className="font-bold">{ i18n.pagesAbout.section1P5 }</span>. 
                { i18n.pagesAbout.section1P6 }
                </p>
                <p className="text-lg mb-2">
                { i18n.pagesAbout.section1P7 }  
                </p>
                <p className="text-lg mb-2">{ i18n.pagesAbout.section1P8 }
                <span className="font-bold">{ i18n.pagesAbout.section1P9 }</span> 
                { i18n.pagesAbout.section1P10 }
                </p>
                <p className="text-lg mb-2">{ i18n.pagesAbout.section1P11 }
                <span className="font-bold">{ i18n.pagesAbout.section1P12 }</span>
                { i18n.pagesAbout.section1P13 }
                </p>
                <p className="text-lg">{ i18n.pagesAbout.section1P14 }
                <span className="font-bold">{ i18n.pagesAbout.section1P15 }</span>,
                { i18n.pagesAbout.section1P16 }
                </p>
            </div>

        </div>
        </Layout>
     );
}
 
export default About;