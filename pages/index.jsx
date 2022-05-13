import Layout from '../components/Layout'
import Image from 'next/image'


export default function Home() {
  return (

    <Layout>

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
            Research and Software Development!
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
          <p className="text-xl uppercase text-center font-bold mb-5">Web Development</p>
          <p className="font-mono text-lg">Web development is the process of building <span className="font-semibold">websites</span> and <span className="font-semibold">applications</span> for
          the internet.</p>
          <p className="font-mono text-lg mt-3">Web development comes as a worldwide channel that communicates your enterprises services
          and value proposition to your target audience. It plays a huge role in converting your audience
          into your potential customers.</p>
          <p className="font-mono text-lg mt-3">You can also create applications that run in a web browser.</p>
        </div>
      </div>
    </div>

    <div>
      <div className="grid md:grid-cols-2 gap-4 m-10">

        <div className="flex justify-center">
        <Image src="/img/844.png" alt="Image from computers" height={400} width={400} className="rounded-lg"></Image>
        </div>
        
        <div>
          <p className="text-xl uppercase text-center font-bold mb-5">PWA Applications</p>
          <p className="font-mono text-lg">These days, everything is made possible with the help of mobile phones and applications.</p>
          <p className="font-mono text-lg mt-3">PWAs are web apps developed using a number of specific technologies and standard patterns
          to allow them to take advantage of both web and native app features.</p>
          <p className="font-mono text-lg mt-3">A <span className="font-semibold">Native App</span> is a software application built in a specific programming language for a
          specific device platform, either IOS or Android.</p>

        </div>
      </div>
    </div>

    
    <aside className="relative overflow-hidden text-white bg-gradient-to-r from-sky-400 to-blue-700">
        <div className="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Building solutions
              <span className="block">
                with Code!
              </span>
            </h2>

            <p className="hidden sm:block sm:max-w-lg sm:ml-auto sm:text-lg">
              You’ll have noticed that, no matter what’s going on in the world around us, technology is omnipresent in our lives. 
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
          <p className="font-mono text-lg">Chatbots are software applications that use artificial intelligence and natural language processing
          to understand what a human wants, and guides them to their desired outcome with as little work for the end user as possible.</p>
          <p className="font-mono text-lg mt-3">Most chatbots are accessed on-line via website popups or through virtual assistants. 
          They can be classified into usage categories that include: commerce (e-commerce via chat), education, entertainment, finance,
          health, news, and productivity.</p>
          

        </div>
      </div>
    </div>

    <div>
      <div className="grid md:grid-cols-2 gap-4 m-10 mt-20">
                
        <div className="lg:ml-10">
          <p className="text-xl uppercase text-center font-bold mb-5">Robotic Process Automation</p>
          <p className="font-mono text-lg">The definition of robotic process automation <span className="font-semibold">RPA</span> is the
          use of computer software robots to handle repetitive, rule-based digital tasks.</p>
          <p className="font-mono text-lg mt-3">The robot is a software worker that can do jobs such as retrieving customer profiles, support
          and order information from multiple enterprise systems and applications.</p>
          <p className="font-mono text-lg mt-3">With robotic process automation (RPA), companies now rely on software robots to do the mundane work, increasing productivity and
          quality of delivered products and services.</p>
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
            Artificial Intelligence.
          </p>

          <p className="mt-4">
          We’re already applying AI to an amazing range of important problems across domains as
          different as medical imaging, agriculture, autonomous driving, education, disaster prevention, and manufacturing.
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
          <p className="text-xl uppercase text-center font-bold mb-5">AI and Machine Learning</p>
          <p className="font-mono text-lg">Concisely, AI can be described as the effort to automate intellectual tasks normally performed
          by humans.</p>
          <p className="font-mono text-lg mt-3">As such, AI is a general field that encompasses machine learning and
          deep learning, but that also includes many more approaches that may not involve any learning.</p>
          <p className="font-mono text-lg mt-3">We have seen major changes in the field in the last few years that have impacted our
          daily lives and the way business decisions are made.</p>
        </div>

        <div className="flex justify-center">
        <Image src="/img/ai.png" alt="Image from computers" height={400} width={500} className="rounded-lg"></Image>
        </div>
      </div>
    </div>

    


    </Layout>
    
  )
}
