import React from 'react'

function Services() {
  return (
    <div className='mt-10'>
           <div className='flex justify-center mb-8 font-semibold'>
            <h1 className='text-4xl border-b-4 border-[#F5DEB3] opacity-75'>Our Services</h1>
           </div>


           <div className='flex flex-wrap gap-6 p-4'>



            {/* sofa Repair Card */}
            <div className='shadow-2xl rounded-2xl'>
                
                {/* Image */}
                <div className='w-full'>
                    <img src="src/assets/SofaRepair.jpg" alt="" className='w-100 h-50 object-cover rounded-t-2xl' />
                </div>

                 {/* other description */}
                <div className='p-4'>   
                   <h1 className='text-2xl font-semibold font-mono opacity-70'><i className="ri-tools-fill"></i> Sofa Repair</h1>
                   <p className='text-[12px] text-[black]/60'>Breathe new life into your favorite sofa.</p>

                   <div className='mt-3 text-[15px]'>
                    <ul className='list-disc pl-6 custom-bullets text-[black]/80 [&>li::marker]:text-yellow-500 [&>li::marker]:text-xl'>
                        <li>Fix frames & springs</li>
                        <li>Replace foam</li>
                        <li>Fresh upholstery</li>
                    </ul>

                   </div>
                </div>
            </div>



            {/* New Sofa Card */}
            <div className='shadow-2xl rounded-2xl'>
                
                {/* Image */}
                <div className='w-full'>
                    <img src="src/assets/NewSofa.jpg" alt="" className='w-100 h-50 object-cover rounded-t-2xl' />
                </div>

                 {/* other description */}
                <div className='p-4'>   
                   <h1 className='text-2xl font-semibold font-mono opacity-70'><i className="ri-armchair-fill"></i> New Sofa Making</h1>
                   <p className='text-[12px] text-[black]/60'>A sofa that’s truly yours, from concept to comfort.</p>

                   <div className='mt-3 text-[15px]'>
                    <ul className='list-disc pl-6 custom-bullets text-[black]/80 [&>li::marker]:text-yellow-500 [&>li::marker]:text-xl'>
                        <li>Custom designs</li>
                        <li>Shape & size options</li>
                        <li>Premium fabrics</li>
                    </ul>

                   </div>
                </div>
            </div>

              {/* Sofa Fabric  Card */}
            <div className='shadow-2xl rounded-2xl'>
                
                {/* Image */}
                <div className='w-full'>
                    <img src="src/assets/SofaFabric.jpg" alt="" className='w-100 h-50 object-cover rounded-t-2xl' />
                </div>

                 {/* other description */}
                <div className='p-4'>   
                   <h1 className='text-2xl font-semibold font-mono opacity-70'><i class="ri-scissors-cut-fill"></i> Fabric Change</h1>
                   <p className='text-[12px] text-[black]/60'>Transform your sofa’s look in just one step.</p>

                   <div className='mt-3 text-[15px]'>
                    <ul className='list-disc pl-6 custom-bullets text-[black]/80 [&>li::marker]:text-yellow-500 [&>li::marker]:text-xl'>
                        <li>Trendy materials</li>
                        <li>Spill-resistant</li>
                        <li>Perfect fit</li>
                    </ul>

                   </div>
                </div>
            </div>

            

           </div>
    </div>
  )
}

export default Services
