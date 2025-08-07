
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"

function App() {


  return (
    <div>
         
        <Navbar/>

        <main className="pt-16">
        <HeroSection/>
        </main>


         {/* phone call button */}
        <a href="tel:+917846940025">
         <button>
          <i className="text-3xl text-[#3D74B6] fixed bottom-5 left-5 ri-phone-fill"></i>
         </button>
         </a>
          {/* whatsapp button  */}
         <a href="https://wa.me/917846940025?text=Hi%2C%20I%20need%20a%20sofa%20repair%20service" 
          target="_blank" rel="noopener noreferrer">
         <button>
          <i className="text-4xl bg-[#25D366]  px-1 rounded-[10%] text-white fixed bottom-5 right-5 ri-whatsapp-line"></i>
         
         </button>
         </a>
    </div>
  )
}

export default App
