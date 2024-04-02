import { useState } from 'react'
import './App.css'
import './index.css'
//"h-full w-full bg-grey-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <div className="text-left">
        Hello World
     </div>
    </>
  )
}

export default App
