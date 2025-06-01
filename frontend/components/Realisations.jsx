"use client";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import { ArrowUpRight } from "lucide-react";

export default function Realisations({ images }) {
   return (
      <div className="mt-20 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-7 p-7">
         <div className="md:sticky top-30 h-fit">
            <div className="bg-radius p-5">
               <div className="flex justify-end md:mb-6">
                  <ArrowUpRight size={50} />
               </div>
               <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Nos réalisations
               </span>
            </div>
            <div className="bg-radius mt-10 p-5">
               <span className="text-lg font-bold">
                  Découvrez les réalisations de O² Dentaire pour les clients qui
                  nous font confiance.
               </span>
            </div>
         </div>
         <Gallery>
            <div className="columns-2 gap-0">
               {images.map((image) => {
                  const originalUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${image?.url}`;
                  const thumbnailUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                     image?.formats?.medium?.url || image?.url
                  }`;

                  return (
                     <Item
                        key={image.id}
                        original={originalUrl}
                        thumbnail={thumbnailUrl}
                        width={image.width || 1600}
                        height={image.height || 900}
                     >
                        {({ ref, open }) => (
                           <img
                              ref={ref}
                              onClick={open}
                              src={thumbnailUrl}
                              alt={image.alternativeText || ""}
                              className="cursor-pointer object-cover filter hover:brightness-50 transition-all duration-300"
                           />
                        )}
                     </Item>
                  );
               })}
            </div>
         </Gallery>
      </div>
   );
}
