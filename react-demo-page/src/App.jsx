import { useState } from 'react'
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'

import { CORE_CONCEPTS, EXAMPLES } from './data.js'

function App(){

    const [selectedTab, setSelectedTab] = useState()
     function handelSelectTab(selectedButton){
        setSelectedTab(selectedButton)
        console.log(selectedTab)
    }
    
    

   
   
    return (
        <div>
            <Header></Header>
            <main className='w-11/12 max-w-3xl mx-auto'>
                <h2 className='text-[#a18aba] text-3xl font-bold text-center mb-6  tracking-tight '> Time to get started</h2>

                <section className=' p-8 rounded-xl   bg-[#140524] shadow-2xl'>
                    <ul className='flex flex-col md:flex-row justify-center  items-center list-none  gap-8 '>
                         {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept {...conceptItem}/>)}  
                    </ul>
                </section>
                <section className='mx-auto my-12'>
                    <h2 className='text-[#a18aba] font-bold text-2xl text-left'>Examples</h2>
                    <menu className='flex my-4 mx-0 p-0 gap-2 list-none ' >
                        <TabButton isSelected={selectedTab === "components"} onselect={()=>handelSelectTab("components")}>Component</TabButton>
                        <TabButton isSelected={selectedTab === "jsx"} onselect={()=>handelSelectTab("jsx")}>JSX</TabButton>
                        <TabButton isSelected={selectedTab === "props"} onselect={()=>handelSelectTab("props")}>Props</TabButton>
                        <TabButton isSelected={selectedTab === "state"} onselect={()=>handelSelectTab("state")}>State</TabButton>
                    </menu>
                </section>
                <div className='p-4 rounded-md bg-[#2f1d43] shadow-lg'>
            <h3 className='my-3 font-bold text-xl font-sans  '>{EXAMPLES[selectedTab]?.title}</h3>
            <p>{EXAMPLES[selectedTab]?.description}</p>
            <pre>
                <code className='text-lg'>
                    {EXAMPLES[selectedTab]?.code}
                </code>
            </pre>
        </div>
            </main>
        </div>
      
    )
}
export default App