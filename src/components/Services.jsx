import React, { useEffect, useRef } from 'react';
// Step 1: Import motion and necessary hooks from framer-motion
import { motion, useAnimation, useInView } from 'framer-motion';

function Services() {
  // Step 2: Set up controls and refs for scroll-triggered animations
  const controls = useAnimation();
  const ref = useRef(null);
  
  // useInView hook will return true if the element with 'ref' is in the viewport.
  // { once: false } ensures the animation triggers every time it enters the screen.
  // { threshold: 0.1 } means the animation will start when 10% of the element is visible.
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  // Step 3: Use useEffect to start the animation when the component is in view
  useEffect(() => {
    if (isInView) {
      // Start the 'visible' animation variant
      controls.start('visible');
    } else {
      // Optionally, reset to 'hidden' when it goes out of view
      // This makes the animation replay every time you scroll up and down
      controls.start('hidden');
    }
  }, [isInView, controls]);

  // Step 4: Define animation variants for the container and the cards
  // The container will orchestrate the animation of its children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Stagger the animation of children by 0.2 seconds
        staggerChildren: 0.2,
      },
    },
  };

  // The cards will animate from bottom to top
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
  };

  return (
    <div id='services' className='mt-15'>
      <div className='flex justify-center mb-8 font-semibold'>
        <h1 className='text-4xl border-b-4 border-[#F5DEB3] opacity-75'>Our Services</h1>
      </div>

      {/* Step 5: Apply the motion component, ref, and variants to the container */}
      <motion.div
        ref={ref}
        className='flex flex-wrap gap-6 p-4 justify-center' // Added justify-center for better alignment
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >

        {/* Sofa Repair Card */}
        {/* Step 6: Convert each card's div to motion.div and apply card variants */}
        <motion.div
          className='shadow-2xl rounded-2xl w-full sm:w-auto md:w-[350px]' // Added responsive width
          variants={cardVariants}
        >
          <div className='w-full'>
            <img src="src/assets/SofaRepair.jpg" alt="Sofa Repair" className='w-full h-52 object-cover rounded-t-2xl' />
          </div>
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
        </motion.div>

        {/* New Sofa Card */}
        <motion.div
          className='shadow-2xl rounded-2xl w-full sm:w-auto md:w-[350px]'
          variants={cardVariants}
        >
          <div className='w-full'>
            <img src="src/assets/NewSofa.jpg" alt="New Sofa Making" className='w-full h-52 object-cover rounded-t-2xl' />
          </div>
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
        </motion.div>

        {/* Sofa Fabric Card */}
        <motion.div
          className='shadow-2xl rounded-2xl w-full sm:w-auto md:w-[350px]'
          variants={cardVariants}
        >
          <div className='w-full'>
            <img src="src/assets/SofaFabric.jpg" alt="Fabric Change" className='w-full h-52 object-cover rounded-t-2xl' />
          </div>
          <div className='p-4'>
            <h1 className='text-2xl font-semibold font-mono opacity-70'><i className="ri-scissors-cut-fill"></i> Fabric Change</h1>
            <p className='text-[12px] text-[black]/60'>Transform your sofa’s look in just one step.</p>
            <div className='mt-3 text-[15px]'>
              <ul className='list-disc pl-6 custom-bullets text-[black]/80 [&>li::marker]:text-yellow-500 [&>li::marker]:text-xl'>
                <li>Trendy materials</li>
                <li>Spill-resistant</li>
                <li>Perfect fit</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Services;