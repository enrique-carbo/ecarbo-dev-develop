import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({children, title, description}) => {
    return ( 
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" sizes="any" type="image/svg+xml" href="/img/logo-ecarbo.svg"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>

            <Navbar></Navbar>

            <main>
                {children}
            </main>

            <Footer></Footer>
            
        </div>
     );
}
 
export default Layout;

Layout.defaultProps = {
    title: "ECarbo Dev | Next",
    description: "Enrique Carbó software developer portfolio webpage"
}