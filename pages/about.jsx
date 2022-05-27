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
                <p className="text-lg mb-2">My name is <span className="text-blue-600 font-bold">Enrique</span>, I was born in Paraná province of Entre Rios. A province surrounded by rivers
                in a South American country, Argentina. I like to listen to music, while I do exercises and life outdoors.</p>
                <p className="text-lg mb-2">I am a doctor, a specialist in general medicine and dermatology, which gives me a broad perspective of
                biological processes in general. Related to this, I like to investigate and study about the impact of nutrition
                on our health, so I try to lead a healthy life.</p>
                <p className="text-lg mb-2">My other great passion is <span className="font-bold">Computer Science</span>. I always accompany myself in my work as a health professional,
                but for some years now I have spent more time studying and practicing.</p>
                <p className="text-lg mb-2">I have researched and used electronic medical records for many years in general open source such as openEMR or GNUhealth.</p>
                <p className="text-lg mb-2">I have <span className="font-bold">3 years experience building Web Pages and PWA applications</span> with javascript libraries and frameworks.</p>
                <p className="text-lg mb-2">Lately progress in knowledge of <span className="font-bold">Artificial Intelligence and Machine Learning</span> in different areas such as natural language processing and computer vision.</p>
                <p className="text-lg">I do not want to forget to mention a very interesting tool that is related to previously mentioned technologies, such as <span className="font-bold">Robotic Process Automation or RPA</span>,
                which I think has a lot to grow in the future.</p>
            </div>

        </div>
        </Layout>
     );
}
 
export default About;