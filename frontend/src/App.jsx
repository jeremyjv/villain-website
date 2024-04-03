
import './index.css'
import hero from "./assets/herosection.png"

//"h-full w-full bg-grey-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
{/* <img src={hero} class="w-full h-auto filter brightness-50" />
<h1 className='text-center absolute top-0 right-1/4 font-bold text-white text-8xl' >
Jeremy Villanueva 
</h1>
<h1 className='text-center absolute top-1/2 right-1/4 font-bold text-white'>
Software Developer 
</h1> */}


function App() {

  return (
    <>
   
   <div class="relative h-screen">
        
        <div class="bg-hero absolute inset-0 bg-cover bg-center"></div>
        
        
        <div class="absolute inset-0 bg-black opacity-65"></div>
        
        
        <div class="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white w-full">
            <h1 class="text-8xl font-bold">Jeremy Villanueva</h1>
            <p class="mt-10 text-3xl">Software Developer</p>
        </div>
    </div>


   {/* <div class="bg-black relative bg-cover bg-center h-screen flex justify-center items-start">
    <div class="text-center text-white">
        <h1 class="text-8xl font-bold mt-1/3">Jeremy Villanueva</h1>
        <p class="mt-8 text-2xl">Software Developer</p>
    </div>
  </div>   */}


      {/* <div class="bg-hero w-full h-auto bg-cover">
          <div className='bg-transparent text-white'>Jeremy Villanueva</div>
          <div className='bg-transparent text-white'>Software Developer</div>
      </div> */}


      
      
      
      

      


      {/* <div className='font-bold text-white'>
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
     */}
      
    </>
    
    
    
   
  )
}

export default App
