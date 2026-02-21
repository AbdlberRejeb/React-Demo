
export default function TabButton({children , onselect, isSelected}) {
    return(
        <li><button onClick={onselect} className={`px-4 py-2 rounded-md bg-transparent text-[#a18aba] text-base cursor-pointer transition-all duration-200 ease-in-out font-sans hover:bg-[#1b082f] hover:text-[#ebe7ef] ${isSelected ? 'active' : null}`} >{children}</button></li>
    )
}