import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from 'lucide-react'
import { FolderCode } from 'lucide-react'
import { CircleUserRound } from 'lucide-react'
import { MessageSquareShare } from 'lucide-react'
import { Layers3 } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className='bg-[#232323] w-screen h-screen flex flex-col'>
      {/* Navigation Bar */}
      
      <nav className=' h-44 md:h-screen w-screen lg:w-20 border border-transparent border-r-neutral-700 shawow-md flex flex-row p-2 justify-center items-center fixed'>
        <ul className='p-2 '>
          <a href="" ><Home className='stroke-neutral-200 w-8 m-6'/></a>
          <a href=""><FolderCode className='stroke-neutral-200 w-8 m-6'/></a>
          <a href=""><Layers3 className='stroke-neutral-200 w-8 m-6'/></a>
          <a href=""><CircleUserRound className='stroke-neutral-200 w-8 m-6'/></a>
          <a href=""><MessageSquareShare className='stroke-neutral-200 w-8 m-6'/></a>
        </ul>
      </nav>
      
   
      
     </section>
  
    </>
  )
}

export default App
