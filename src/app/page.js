import Image from "next/image";
import Navbar from "@/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import CompareImage from "@/components/CompareImage";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";




export default function Home() {
  return (


   <div>

    {/* phone button */}
  <div className="fixed bottom-5 left-5 z-50">
  <div className="relative w-14 h-14">
    {/* Ripple Layer 1 */}
    <span className="absolute left-1.5 top-1.5 w-11 h-11 rounded-full bg-[#3D74B6] opacity-80 smooth-ripple duration-[1000ms] ease-in-out"></span>

    {/* Ripple Layer 2 */}
    <span className="absolute left-1.5 top-1.5 w-11 h-11 rounded-full bg-[#3D74B6] opacity-60 smooth-ripple duration-[2000ms] ease-in-out delay-[500ms]"></span>

    {/* Ripple Layer 3 */}
    <span className="absolute left-1.5 top-1.5 w-11 h-11 rounded-full bg-[#3D74B6] opacity-40 smooth-ripple duration-[3000ms] ease-in-out delay-[500ms]"></span>

    {/* Phone button */}
    <a href="tel:+917846940025">
      <button className="relative w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center">
        <i className="text-2xl text-[#3D74B6] ri-phone-fill"></i>
      </button>
    </a>
     </div>
   </div>
   {/* whatsapp button  */}
         <a href="https://wa.me/917846940025?text=Hi%2C%20I%20need%20a%20sofa%20repair%20service" 
          target="_blank" rel="noopener noreferrer">
         <button className="w-14 h-14 rounded-full bg-[#25D366] bottom-5 right-5 z-50 fixed">
          <i className="text-4xl  px-1  text-white  ri-whatsapp-line"></i>
         </button>
   </a>


        <Navbar/>
        <main className="pt-16">
        <HeroSection/>
        </main>
        <Services/>
        <AboutUs/>
        <CompareImage/>
        <Reviews/>
        <Gallery/>
        <Faq/>
        <Footer/>
   </div>
  );
}
