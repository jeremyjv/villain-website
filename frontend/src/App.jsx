
import './index.css'
import hero from "./assets/herosection.png"

//"h-full w-full bg-grey-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
function App() {

  return (
    <>
    
    <body className="h-screen w-screen bg-black text-center">
      <img src={hero} className="brightness-40" />
      <h1 className='font-bold text-white pb-20 pt-20' >
      Jeremy Villanueva 
      </h1>
      <h1 className='font-bold text-white'>
    
      Software Developer 
      </h1>
      


      <div className='font-bold text-white'>
        About
      </div>
      
      <div className='font-bold text-white'>
        Experience
      </div>
      <div className="flex h-full w-full">
        <div className= "h-1/3 w-1/3">
          
        </div>
        <div className= "shadow-md shadow-white font-bold align-center text-white h-1/3 w-2/3 bg-blue-200 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 pr-20">
          Portfolio
        </div>
      </div>
    
    </body>
      
    </>
    
    
    
   
  )
}

export default App
