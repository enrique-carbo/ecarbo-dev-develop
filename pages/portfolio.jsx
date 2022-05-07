import Layout from "../components/Layout"
import Card from "../components/card";



const Portfolio = () => {
    return ( 
        <Layout>

          <header className="pt-6 pb-10 bg-gray-300">
            <h1 className="text-4xl font-bold text-center mt-10">Portfolio</h1>


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
              title= "Tamizar Website"
              description= "Medical website and PWA application about screening in colorectal cancer made with Vue.js framework Quasar.dev."
              link= "https://ecarbo.gitlab.io/tamizarcolonpwa"
              pathToImage= "/img/portafolio/tamizar.png"
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
    
        </Layout>
     );
}
 
export default Portfolio;