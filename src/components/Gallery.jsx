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
      src: woodenSofa,
    },
    {
      title: "Recliner Sofa",
      src: reclinerSofa,
    },
    {
      title: "Minimalist Sofa",
      src: minimalistSofa,
    },
    {
      title: "L-Shaped Sofa",
      src: lshapedSofa,
    },
     {
      title: "Convertible Sofa",
      src: convertibleSofa,
    },
     {
      title: "Colorful Fabrics",
      src: colorfulFabrics,
    },
     {
      title: "Premium Fabrics",
      src: premiumFabrics,
    },
    {
      title: "Leather Fabrics",
      src: leatherFabrics,
    },
  ];


  return (
    <div>

      <div className="flex justify-center mt-15">
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
