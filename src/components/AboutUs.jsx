import React from 'react'

function AboutUs() {
  return (
    <div>
      
      <div className='flex justify-center mt-10'>
        <h1 className='text-4xl font-medium opacity-80 border-b-4 border-[#F5DEB3]'>About Us</h1>
      </div>
        
      <div className='flex flex-wrap gap-9 justify-center mt-8 p-2'>
            

             {/* cards for about us  */}
             <div className='border-1 border-[black]/20 p-3 rounded-2xl shadow-2xl'>
                 {/* Icon */}
               <div className='flex justify-center text-5xl'>
                   <h1 className=' px-8 py-12 opacity-75 font-semibold text-[#DEB887] rounded-[50%] bg-[grey]/10'>10+</h1>
               </div>
               {/* Title */}
               <div className='mt-4'>
                    <h1 className='text-2xl opacity-80 font-semibold text-center'>10+ Years Of Experience</h1>
                    <br />
                    <p className='p-3 font-thin'>
                     We’ve helped countless homes upgrade their comfort and style. Every sofa is built or repaired with precision, using premium materials and skilled workmanship. Our designs blend durability with timeless elegance, ensuring your sofa stays beautiful for years.
                    </p>
               </div>

             </div>


             {/* cards for about us  */}
             <div className='border-1 border-[black]/20 p-3 py-5 rounded-2xl shadow-2xl'>
                 {/* Icon */}
               <div className='flex justify-center text-4xl'>
                   <h1 className=' px-11 py-10 text-5xl  opacity-75 font-semibold text-[#DEB887] rounded-[50%] bg-[grey]/10'>
                   < i className="ri-team-fill"></i></h1>
               </div>
               {/* Title */}
               <div className='mt-4'>
                    <h1 className='text-2xl opacity-80 font-semibold text-center'>Customer-First Approach </h1>
                    <br />
                    <p className='p-3 font-thin'>
                    We put our customers at the heart of everything we do. From design to delivery, every step is tailored to meet your needs, ensuring comfort, quality, and lasting satisfaction.
                    </p>
               </div>

             </div>



              <div className='border-1 border-[black]/20 p-3 rounded-2xl shadow-2xl'>
                 {/* Icon */}
               <div className='flex justify-center text-4xl'>
                   <h1 className=' px-11 py-10 text-5xl  opacity-75 font-semibold text-[#DEB887] rounded-[50%] bg-[grey]/10'>
                  <i className="ri-user-settings-fill"></i></h1>
               </div>
               {/* Title */}
               <div className='mt-4'>
                    <h1 className='text-2xl opacity-80 font-semibold text-center'>Sofa Makers & Repair Experts</h1>
                    <br />
                    <p className='p-3 font-thin'>
                   Crafting and restoring sofas with precision and care, we combine skilled craftsmanship with premium materials to deliver comfort, style, and durability. Whether it’s building a new piece or giving your old one a fresh life, we ensure every detail reflects our commitment to quality.
                    </p>
               </div>

             </div>

      </div>
      
    </div>
  )
}

export default AboutUs
