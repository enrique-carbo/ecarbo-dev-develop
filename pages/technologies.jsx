import Layout from "../components/Layout"
import TabsTechRender from "../components/tabs-technologies"
import Image from "next/image"

import { useRouter } from 'next/router'

//i18n
import en from "../i18n/en"
import es from "../i18n/es"

const Technologies = () => {

    const { locale } = useRouter()
    const i18n = locale === "en" ? en : es

    return ( 
        <Layout
        title="Tech | ECarbo"
        >

        <header className="relative overflow-hidden text-white bg-gradient-to-r from-sky-400 to-blue-700">
        <div className="relative z-10 max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              { i18n.pagesTechnologies.headerTitle }
            </h2>
         </div>
        </div>

        <div className="absolute inset-0 w-full h-full mix-blend-multiply">
          <Image
            src="/img/motion-speed.jpg"
            alt="motion speed background"
            className="absolute inset-0 object-cover object-top w-full h-full"
            layout="fill"
            priority="true"
          />
        </div>
        </header>

        <div className="container mx-auto mt-10 mb-10">
          <TabsTechRender/>
        </div>
              


            
        </Layout>
     );
}
 
export default Technologies;