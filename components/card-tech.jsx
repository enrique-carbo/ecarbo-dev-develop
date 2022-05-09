const CardTech = (props) => {
    return ( 
        <div className="relative p-8 border border-gray-100 rounded-lg w-52 max-w-fit">
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
            ></span>
            <div className="flex justify-center">
                <img className="w-24"
                src= {props.srcImage}
                alt= {props.altImage}
                />
            </div>

            <div>
                <p className="text-base font-bold text-center"> {props.title} </p>
            </div>
        </div>
     );
}
 
export default CardTech;