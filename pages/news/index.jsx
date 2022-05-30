import Layout from "../../components/Layout";
import Image from "next/image";
import Posts from "../../data/news.json"

import { useRouter } from 'next/router'

//i18n
import en from "../../i18n/en"
import es from "../../i18n/es"


const News = () => {
    const { locale } = useRouter()
    const i18n = locale === "en" ? en : es

    const heroPost = Posts.news[0]
    const posts = Posts.news.slice(1)
    
    return ( 

        <Layout
        title="News | ECarbo"
        >
         
        <header className="relative overflow-hidden text-white bg-gradient-to-r from-sky-400 to-blue-700">
        <div className="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              { i18n.pagesNews.headerTitle }
            </h2>

            <p className="hidden sm:block sm:max-w-lg sm:ml-auto sm:text-lg">
              { i18n.pagesNews.headerSubtitle }  
            </p>
   
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full mix-blend-multiply">
          <Image
            src="/img/keyboard-person.jpg"
            alt="Code laptop"
            className="absolute inset-0 object-cover object-top w-full h-full"
            layout="fill"
            priority="true"
          />
        </div>
        </header>

        <div className="grid lg:grid-cols-2 lg:mx-20">
          <div className="flex md:justify-center lg:justify-end m-10">
            <Image src={heroPost.img} alt={heroPost.title} width={600} height={400} className="rounded-xl" />
          </div>
          
          <div className="mx-5">
            <div className="lg:mt-10">
            <a href={heroPost.href} target="_blank" rel="noreferrer">
              <h3 className="text-4xl text-gray-900 hover:underline underline-offset-2 decoration-blue-600"> {heroPost.title} </h3>
            </a>
              <div className="text-base mt-3"> {heroPost.date} </div>
            </div>

            <div className="mt-5 lg:mt-10">
              <p className="text-gray-600 text-xl">{heroPost.desc}</p>
            </div>
          </div>

        </div>

        
        <div className="text-3xl lg:text-4xl font-bold ml-8 lg:ml-16 mt-10">{ i18n.pagesNews.moreNews} </div>
        <div className="mt-12 grid md:gap-4 md:grid-cols-2 md:mx-5 lg:grid-cols-3 xl:grid-cols-4 mb-10 lg:mx-20 lg:gap-10">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href} target="_blank" rel="noreferrer">
                                <Image src={items.img} alt={items.title} width={500} height={300} className="rounded-t-lg" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="ml-3">
                                        <span className="block text-gray-400 text-sm">{items.date}</span>
                                    </div>
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>



        </Layout>
        
     );
}
 
export default News;