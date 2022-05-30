import { useState, useEffect } from "react"
import Datos from "../data/quotes.json"

const Quotes = () => {
    const data = Datos.data

    const [quote, setQuote] = useState({})

    useEffect(() => {
        let randomQuote = data[Math.floor(Math.random() * data.length)] 

        setQuote(randomQuote)
      }, []);
    
        
    return ( 
        <div>
            <div className="border-l-4 border-blue-700">
                <p className="italic ml-2">{ quote.quoteText }</p>
                <span className="text-3xl text-bold ml-2">&quot;</span>
            </div>
            <h4 className="mt-5 font-bold"> -- {quote.author} </h4>
        </div>
     );
}
 
export default Quotes;
