
function CoreConcept({image, title, description}) {
 return(
    <li className="w-40">
        <img src={image} alt={title} className="w-24 h-16 object-cover m-auto"/>
        <h3 className="text-center mb-6 mt-2  text-[#a18aba] font-bold text-2xl ">{title}</h3>
        <p className="text-[0.9rem] font-sans text-center">{description}</p>
    </li>
 )
}
export default CoreConcept