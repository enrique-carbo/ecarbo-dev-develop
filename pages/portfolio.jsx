import Layout from "../components/Layout"
import Card from "../components/card"
import Image from "next/image"

import { useRouter } from 'next/router'

//i18n
import en from "../i18n/en"
import es from "../i18n/es"



const Portfolio = () => {

    const { locale } = useRouter()
    const i18n = locale === "en" ? en : es


    return ( 
        <Layout
        title="Portfolio | ECarbo"
        >

        <header className="relative overflow-hidden text-white bg-gradient-to-r from-sky-400 to-blue-700">
        <div className="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              { i18n.pagesPortfolio.headerTitle }
            </h2>
         </div>
        </div>

        <div className="absolute inset-0 w-full h-full mix-blend-multiply">
          <Image
            src="/img/webcode.jpg"
            alt="motion speed background"
            className="absolute inset-0 object-cover object-top w-full h-full"
            layout="fill"
            priority="true"
          />
        </div>
        </header>

            <div className="grid md:grid-cols-3 gap-4 mt-10 mb-5 mx-5">

            <Card 
              title= "Medical Website"
              description= "Medical website made with a Vue.js framework called Quasar.dev"
              link= "https://www.dermatologiacarbo.com.ar"
              pathToImage= "/img/portafolio/dermatologiacarbo.png"
            />

            <Card 
              title= "Clinimetria Website"
              description= "Medical website about clinimetric and other health calculators made with Vanilla Javascript."
              link= "https://www.clinimetria.com.ar"
              pathToImage= "/img/portafolio/clinimetria.png"
            />

            <Card 
                title= "Atopic Dermatitis PWA"
                description= "Atopic Dermatitis PWA with Clinimetry calculator built with Quasar.dev"
                link= "https://ecarbo.gitlab.io/atopica-pwa/" 
                pathToImage= "/img/portafolio/atopica.png" 
            />
            
            </div>


            <div className="grid md:grid-cols-3 gap-4 mt-10 mb-5 mx-5">

              <Card
                title= "Cov-Doc PWA Application"
                description= "Medical PWA application and clinical calculator about Covid-19 made with a Vue.js framework called Quasar.dev"
                link= "https://ecarbo.gitlab.io/coronaviruspwa"
                pathToImage= "/img/portafolio/Cov-Doc.png"
              />

              <Card
                title= "Patient Portal PWA"
                description=  {`Medical PWA application for patients made with Quasar Framework and Firebase. 
                                Correo: test@test.com
                                Pass: 123456`}
                link= "https://ecarbo.gitlab.io/portalpacientepwa/#/Login"
                pathToImage= "/img/portafolio/portal-paciente.png"
              />

              <Card
                title= "Question Answering with BERT"
                description= "Website for questions answering with Bert in React.JS"
                link= "https://enrique-carbo.github.io/bertqna/"
                pathToImage= "/img/portafolio/bertqna.png"
              />
            </div>


            <div className="grid md:grid-cols-3 gap-4 mt-10 mb-20 mx-5">

              <Card 
                title= "Weather React App"
                description= "Weather application using APIs built with React.js"
                link= "https://enrique-carbo.github.io/clima-react-app/" 
                pathToImage= "/img/portafolio/clima-react.png" 
              />

              <Card 
                title= "Cryptocurrencies with React"
                description= "Website that displays the price of cryptocurrencies using API built with React.js."
                link= "https://enrique-carbo.github.io/cotizadorcripto/"
                pathToImage= "/img/portafolio/cotizador.png"
              />

              <Card 
                title= "Hugging Face Spaces"
                description= "Artificial intelligence projects with Transformers."
                link= "https://huggingface.co/ecarbo"
                pathToImage= "/img/portafolio/hf.png"
              />
                   
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-10 mb-20 mx-5">
            
            <Card 
              title= "Tamizar Website"
              description= "Medical website and PWA application about screening in colorectal cancer made with Vue.js framework Quasar.dev."
              link= "https://ecarbo.gitlab.io/tamizarcolonpwa"
              pathToImage= "/img/portafolio/tamizar.png"
            /> 

            <Card 
              title= "Lifestyle Medicine Website"
              description= "Medical website about Lifestyle Medicine made with React, Next and Tailwind."
              link= "https://lifestylemedicine.vercel.app/"
              pathToImage= "/img/portafolio/lifestylemedicine.png"
            /> 

            <Card 
            title= "Alopecia Areata Website"
            description= "Medical website about Alopecia Areata with Clinimetrics calculators made with Angular, Angular Material and Flex-Layout."
            link= "https://enrique-carbo.github.io/alopecia-areata/"
            pathToImage= "/img/portafolio/alopecia-areata-web.png"
            /> 

            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-10 mb-20 mx-5">
            <Card 
            title= "Adiseniar Website"
            description= "Graphic design and software development website built with Angular and Tailwindcss."
            link= "https://www.adiseni.ar/"
            pathToImage= "/img/portafolio/adiseniar.png"
            /> 
            </div>
    
        </Layout>
     );
}
 
export default Portfolio;