import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";

const primerPost = () => {
    return (

        <Layout>
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Mi Primer Post</h1>
            <div className="flex flex-row">
                <Image
                    src="/img/dev.jpg"
                    alt="Imagen developer"
                    width={800}
                    height={600}>
                </Image>
            </div>

            <Link href="/">
                <a className="text-blue-500">Volver al Inicio</a>
            </Link>
        </div>
        </Layout>

    );
}

export default primerPost;