
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
        <div class="bg-black absolute inset-0 bg-cover bg-center">
          <div className= 'text-white text-bold font-body pl-2 pt-2'>jeremys-macbook-pro % git commit -m “its gotta be dark mode”</div>
          <div className= 'text-white text-bold font-body pl-2 pt-2'>jeremys-macbook-pro % git push</div>
          <div className= 'text-dark text-8xl text-transparent bg-clip-text bg-gradient-to-t from-blue-500 to-purple-600 text-center inset-x-0 bottom-0'>
            <div className= ''>
            <div className= 'absolute left-1'>Jeremy</div>
            <div>Jeremy</div>
            <div>Jeremy</div>
            <div>Villanueva</div>
            <div>Villanueva</div>
            <div>Villanueva</div>
            </div>
            </div>
        </div>
    </div>

      
    </>
    
    
    
   
  )
}

export default App
