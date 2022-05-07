import Layout from "../components/Layout";
import Image from "next/image";

const About = () => {
    return ( 
        <Layout
        title="About | Next"
        >
        <header className="pt-6 pb-10 bg-gray-300">
            <h1 className="text-4xl font-bold text-center mt-10">
                About me
            </h1>
        </header>



        <div className="grid md:grid-cols-2 gap-4 my-10">
            <div className="flex justify-center md:justify-end max-h-80 mt-10">
                <Image src="/img/anime-ecarbo.png" alt="Developer image" height={300} width={300} 
                className="rounded-full"></Image>
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