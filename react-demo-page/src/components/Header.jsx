import reactImage from '../assets/react.svg'

function Header() {
     const descriptions = ["Fundamental", " Core", "Crutial"]
    function getRandomDescription(max){
        return Math.floor(Math.random()*(max+1))
    }

    return(
    <header className=' text-center my-12 mx-0'>
                <img src={reactImage} alt="react image "
                 className='w-40 h-20 mx-auto my-8 ' />
                 
                <h1 className=' text-7xl font-extrabold bg-linear-to-r bg-clip-text text-transparent 
                from-fuchsia-500 to-cyan-500 m-0 mbs-[0.5em] mbe-[0.5em]'> React Essential</h1>

                <p className='text-xl text-[#8964b0] m-0'>{descriptions[getRandomDescription(descriptions.length-1)]} React concepts you will need for almost any app you are going to build!</p>
            </header>
)}
export default Header