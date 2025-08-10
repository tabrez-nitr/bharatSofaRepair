import React from 'react'
import { Carousel } from './ui/Carousel'

function Gallery() {
   
   const slideData = [
    {
      title: "Wooden Sofa",
      src: "src/assets/GalleryWooden.jpg",
    },
    {
      title: "Recliner Sofa",
      src: "src/assets/GalleryRecliner.jpg",
    },
    {
      title: "Minimalist Sofa",
      src: "src/assets/GalleryMinimalist.jpg",
    },
    {
      title: "L-Shaped Sofa",
      src: "src/assets/GalleryLShaped.jpg",
    },
     {
      title: "Convertible Sofa",
      src: "src/assets/GalleryConvertible.jpg",
    },
     {
      title: "Colorful Fabrics",
      src: "src/assets/GalleryColorfulFabrics.jpg",
    },
     {
      title: "Premium Fabrics",
      src: "src/assets/GalleryPremiumFabrics.jpg",
    },
    {
      title: "Leather Fabrics",
      src: "src/assets/GalleryLeatherFabric.jpg",
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
