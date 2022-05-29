import { useRouter } from "next/router";
import Image from "next/image";

//i18n
import en from "../i18n/en"
import es from "../i18n/es"

const SelectorInt = () => {

    const router = useRouter()

    const i18n = router.locale === "en" ? en : es

    const handleChange = (e) => {
        router.push(router.pathname, router.pathname, {locale: e.target.value} )
    }

    return ( 
        <div>
            <select className="
            form-select appearance-none
            text-base text-gray-600
            font-semibold
            px-3 py-2
            bg-blue-100
            border-2 border-solid border-blue-500
            rounded
            transition ease-in-out"
            onChange={handleChange}
            >
                <option value="">
                    { i18n.componentSelectori18n.selector }
                </option>
                <option value="en">English</option>
                <option value="es">Español</option>
            </select>
        </div> 
    );
}
 
export default SelectorInt;