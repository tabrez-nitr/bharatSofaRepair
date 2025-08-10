import React from 'react'
import { Compare } from './ui/Compare'

function CompareImage() {
  return (
    <div className='mt-10'>
          <div className="flex justify-center mt-10 mb-10">
        <h1 className="text-3xl font-medium opacity-80 border-b-4 border-[#F5DEB3]">
          Restoration Showcase
        </h1>
      </div>
        <div className='p-5'>
         <Compare 
         firstImage='src/assets/After-1.jpeg'
         secondImage='src/assets/Before-1.jpeg'
         className="h-90  w-full rounded-lg shadow-lg"
         initialSliderPercentage={40}
         slideMode="drag"
         showHandlebar={true}
         />
         </div>

          <div className='px-5 mt-4'>
         <Compare 
         firstImage='src/assets/AfterRepair.jpg'
         secondImage='src/assets/BeforeRepair.jpg'
         className="h-90  w-full rounded-lg shadow-lg"
         initialSliderPercentage={40}
         slideMode="drag"
         showHandlebar={true}
         />
         </div>
    </div>
  )

  
}

export default CompareImage
