import React from 'react'
import { Carousel } from './ui/Carousel'
import woodenSofa from '../assets/GalleryWooden.jpg'
import reclinerSofa from '../assets/GalleryRecliner.jpg'
import minimalistSofa from '../assets/GalleryMinimalist.jpg'
import lshapedSofa from '../assets/GalleryLShaped.jpg'
import convertibleSofa from '../assets/GalleryConvertible.jpg'
import colorfulFabrics from '../assets/GalleryColorfulFabrics.jpg'
import premiumFabrics from '../assets/GalleryPremiumFabrics.jpg'
import leatherFabrics from '../assets/GalleryLeatherFabric.jpg'

function Gallery() {
   
   const slideData = [
    {
      title: "Wooden Sofa",
      src: woodenSofa.src,
    },
    {
      title: "Recliner Sofa",
      src: reclinerSofa.src,
    },
    {
      title: "Minimalist Sofa",
      src: minimalistSofa.src,
    },
    {
      title: "L-Shaped Sofa",
      src: lshapedSofa.src,
    },
     {
      title: "Convertible Sofa",
      src: convertibleSofa.src,
    },
     {
      title: "Colorful Fabrics",
      src: colorfulFabrics.src,
    },
     {
      title: "Premium Fabrics",
      src: premiumFabrics.src,
    },
    {
      title: "Leather Fabrics",
      src: leatherFabrics.src,
    },
  ];


  return (
    <div>

      <div className="flex justify-center mt-15 md:mt-40">
        <h1 className="text-4xl font-medium opacity-80 border-b-4 border-[#F5DEB3]">
          Gallery
        </h1>
      </div>
        <div className="relative overflow-hidden w-full h-full py-15">
        <Carousel slides={slideData} />
    </div>
    </div>
  )
}

export default Gallery
