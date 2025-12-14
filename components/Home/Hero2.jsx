"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero({ title, image }) {
   const [headerHeight, setHeaderHeight] = useState(0);
   useEffect(() => {
      const header = document.getElementById("header");
      if (header) {
         setHeaderHeight(header.offsetHeight);
      }
   }, []);

   return (
      <section
         className="flex flex-col items-center justify-center bg-cover bg-center"
         style={{
            minHeight: `calc(100vh - ${headerHeight}px)`,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
         }}
      >
         <div className="wrapper">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 w-2xl max-w-full">
               {title}
            </h1>
            <div className="flex gap-5">
               <Button asChild size="lg">
                  <Link href="/contact">Nous contacter</Link>
               </Button>
               <Button variant="outline" size="lg" className="text-white">
                  <Link href="/realisations">Nos réalisations</Link>
               </Button>
            </div>
         </div>
      </section>
   );
}
