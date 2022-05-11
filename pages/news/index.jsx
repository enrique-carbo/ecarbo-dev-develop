import Layout from "../../components/Layout";
import Image from "next/image";

const News = () => {
    const posts = [
        {
            title: "AbbVie and Cerebras Systems partner to accelerate AI research",
            desc: "Link up between AbbVie and Cerebras Systems boosts AI platforms, while radically reducing energy consumption",
            img: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
            date: "May 9 2022",
            href: "https://www.pharmatimes.com/news/abbvie_and_cerebras_systems_partner_to_accelerate_ai_research_1448088"
        },
        {
            title: "PyScript — became Pythonic in the browser",
            desc: `During a keynote speech at PyCon US 2022, Anaconda’s CEO Peter Wang unveiled quite a surprising project — PyScript. It is a JavaScript framework that allows users to create Python applications in the browser using a mix of Python and standard HTML.`,
            img: "https://pyscript.net/assets/images/pyscript-sticker-black.svg",
            date: "May 7 2022",
            href: "https://pyscript.net/"
        },
        {
            title: "HyperUI — Free Open Source Tailwind CSS Components",
            desc: "HyperUI is a collection of free Tailwind CSS components that can be used in your next project. With a range of components, you can build your next marketing website, admin dashboard, ecommerce store and much more.",
            img: "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            date: "May 7 2022",
            href: "https://www.hyperui.dev/"
        },
        {
            title: "Yoga for weight loss: Benefits beyond burning calories",
            desc: "Yoga can also help you burn calories, as well as increase your muscle mass and tone. There is good research that yoga may help you manage stress, improve your mood, curb emotional eating, and create a community of support.",
            img: "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            date: "May 7 2022",
            href: "https://www.health.harvard.edu/blog/yoga-for-weight-loss-benefits-beyond-burning-calories-202112062650?utm_content=buffer7af8e&utm_medium=social&utm_source=linkedin&utm_campaign=hhp"
        },
        {
            title: "A randomized trial of comparing video telecare education vs in-person education on dietary regimen compliance in patients with type 2 diabetes mellitus.",
            desc: "Video tele-education was just as effective as in-person educational method on dietary regimen compliance among patients with T2DM in a three-month period.",
            img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            date: "May 4 2022",
            href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9063130/"
        }
    ]



    return ( 

        <Layout>

            
        <header className="relative overflow-hidden text-white bg-gradient-to-r from-sky-400 to-blue-700">
        <div className="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              News
            </h2>

            <p className="hidden sm:block sm:max-w-lg sm:ml-auto sm:text-lg">
                Sharing news about technology and health sciences.
            </p>
   
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full mix-blend-multiply">
          <img
            src="/img/keyboard-person.jpg"
            alt="Code laptop"
            className="absolute inset-0 object-cover object-top w-full h-full"
          />
        </div>
        </header>

        <div className="mt-12 grid md:gap-4 md:grid-cols-2 md:mx-5 lg:grid-cols-3 xl:grid-cols-4 mb-10 lg:mx-20 lg:gap-10">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href} target="_blank" rel="noreferrer">
                                <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 rounded-t-md" />
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