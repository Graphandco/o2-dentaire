"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero({ hero }) {
   const { hero_text, hero_image, meta_title, meta_description } = hero;
   const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${hero_image[0]?.url}`;

   return (
      <section
         className="grid grid-cols-1 md:grid-cols-2 gap-7 md:min-h-[100dvh] p-7 my-24 md:my-0"
         //  style={{
         //     minHeight: `calc(100vh - ${headerHeight}px)`,
         //      backgroundImage: `url(${imageUrl})`,
         //      backgroundSize: "cover",
         //      backgroundPosition: "center",
         //  }}
      >
         <div className="flex flex-col justify-center gap-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold w-2xl max-w-full bg-radius p-5">
               {hero_text}
            </h1>
            <div className="grid sm:grid-cols-2 gap-6">
               <Link
                  href="/contact"
                  className="bg-radius p-5 hover:bg-neutral-300 transition-all duration-300"
               >
                  <div className="flex justify-end md:mb-6">
                     <ArrowUpRight size={50} />
                  </div>
                  <span className="text-xl sm:text-2xl font-bold">
                     Nous contacter
                  </span>
               </Link>
               <Link
                  href="/realisations"
                  className="bg-radius p-5 hover:bg-neutral-300 transition-all duration-300"
               >
                  <div className="flex justify-end md:mb-6">
                     <ArrowUpRight size={50} />
                  </div>
                  <span className="text-xl sm:text-2xl font-bold">
                     Nos réalisations
                  </span>
               </Link>
            </div>
         </div>
         <div
            style={{
               backgroundImage: `url(${imageUrl})`,
            }}
            className="bg-radius bg-cover bg-center min-h-[30dvh]"
         ></div>
      </section>
   );
}
