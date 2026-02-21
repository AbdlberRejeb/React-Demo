
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import { CORE_CONCEPTS } from './data.js'

function App(){
   
    return (
        <div>
            <Header></Header>
            <main>
                <h2 className='text-[#a18aba] text-3xl font-bold text-center mb-6  tracking-tight '> Time to get started</h2>

                <section className='w-4xl p-8 rounded-xl mx-auto  bg-black'>
                    <ul className='flex flex-row justify-center flex-wrap list-none  gap-8 '>
                         {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept {...conceptItem}/>)}  
                    </ul>
                </section>
            </main>
        </div>
      
    )
}
export default App