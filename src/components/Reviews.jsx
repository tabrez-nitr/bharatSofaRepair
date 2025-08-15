import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';

function Reviews() {

    const testimonials = [
  {
    review: "I got my old sofa repaired recently, and I must say the quality of work is outstanding. The team was professional and completed it on time. My sofa looks almost brand new now!",
    name: "Rahul Sharma",
    address: "Vijay Nagar, Noida",
    date: "July 2025",
  },
  {
    review: "The custom fabric options are amazing! I chose a soft velvet fabric for my new sofa, and it feels very luxurious. The finish is neat, and the team was very helpful throughout.",
    name: "Neha Gupta",
    address: "Greater Noida, Delhi",
    date: "June 2023",
  },
  {
    review: "Excellent service and very skilled workers. They fixed the springs and cushions perfectly, and the sofa now feels much more comfortable. Definitely recommend their repair services!",
    name: "Amit Verma",
    address: "Sector 44, Noida",
    date: "May 2024",
  },
  {
    review: "I had my sofa reupholstered with new fabric, and it looks fantastic. The fabric quality is premium and the stitching is flawless. Very satisfied with the entire experience.",
    name: "Gazi Abbas",
    address: "Surajpur, Noida",
    date: "April 2025",
  },
  {
    review: "Quick and efficient service! They handled my sofa upholstery carefully, and the results exceeded my expectations. The fabric colors matched perfectly with my living room decor.",
    name: "Kazim Abbas",
    address: "Sector 50, Noida",
    date: "March 2025",
  },
  {
    review: "Affordable pricing without compromising on quality. The team was polite and hardworking. My sofa now looks stylish and feels much more comfortable after the repair.",
    name: "Anjali Mehta",
    address: "Noida Extension, Delhi",
    date: "February 2025",
  },
];

  return (
    <div className='mt-10 mb-5'>
   <div className='flex justify-center mt-10 mb-10'>
        <h1 className='text-4xl font-medium opacity-80 border-b-4 border-[#F5DEB3]'>Testimonials</h1>
      </div>
        
          <div className=" flex items-center justify-center bg-white">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  )
}

export default Reviews
