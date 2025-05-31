"use client";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

export default function Realisations({ images }) {
   return (
      <Gallery>
         <div className="columns-2 md:columns-3 gap-0">
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
                           className="cursor-pointer object-cover transition-transform duration-200 hover:scale-105"
                        />
                     )}
                  </Item>
               );
            })}
         </div>
      </Gallery>
   );
}
