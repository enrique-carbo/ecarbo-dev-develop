import Layout from "../../components/Layout";
import Image from "next/image";

const Blog = () => {
    const posts = [
        {
            title: "PyScript — became Pythonic in the browser",
            desc: `During a keynote speech at PyCon US 2022, Anaconda’s CEO Peter Wang unveiled quite a surprising project — PyScript. It is a JavaScript framework that allows users to create Python applications in the browser using a mix of Python and standard HTML.`,
            img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "May 7 2022",
            href: "https://pyscript.net/"
        },
        {
            title: "A Quick Guide to WordPress Hosting",
            desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
            img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "Jan 4 2022",
            href: "#"
        },
        {
            title: "7 Promising VS Code Extensions Introduced in 2022",
            desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "Jan 4 2022",
            href: "#"
        },
        {
            title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
            desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
            img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            date: "Jan 4 2022",
            href: "#"
        }
    ]



    return ( 

        <Layout>

            
        <header class="relative overflow-hidden text-white bg-gradient-to-r from-sky-400 to-blue-700">
        <div class="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 class="text-4xl font-bold sm:text-5xl">
              Blog
            </h2>

            <p class="hidden sm:block sm:max-w-lg sm:ml-auto sm:text-lg">
                Sharing news about technology and health sciences.
            </p>
   
          </div>
        </div>

        <div class="absolute inset-0 w-full h-full mix-blend-multiply">
          <img
            src="/img/keyboard-person.jpg"
            alt="Code laptop"
            class="absolute inset-0 object-cover object-top w-full h-full"
          />
        </div>
        </header>

        <div className="mt-12 grid md:gap-4 md:grid-cols-2 md:mx-5 lg:grid-cols-3 xl:grid-cols-4 mb-10 lg:mx-20 lg:gap-10">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href}>
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
 
export default Blog;