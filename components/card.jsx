const Card = (props) => {
    return ( 
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150 duration-300">
              <img className="rounded-t-lg" src={ props.pathToImage } alt="website clinimetria image"/>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{ props.title }</h5>
                <p className="text-gray-700 text-base mb-4">
                    { props.description }
                </p>
                <a 
                href= { props.link } 
                target="_blank" 
                className="inline-block bg-blue-500 hover:bg-blue-400 border-b-4 border-blue-700 hover:border-blue-500 text-white text-center py-2 px-6 rounded shadow-lg transition duration-150 ease-in-out uppercase">
                Link
                </a>   
              </div>
            </div>
        </div>
     );
}
 
export default Card;