"use client";

import Image from "next/image";

export default function HomeCard({ card }) {
   return (
      <article className="p-5 outline-2 outline-primary outline-offset-2 rounded-xl flex flex-col items-center gap-3">
         <div className="text-center text-xl font-bold text-black min-h-12">
            {card.title}
         </div>
         <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.image.url}`}
            alt={card.title}
            width={50}
            height={50}
         />
         <div className="text-neutral-500">{card.description}</div>
      </article>
   );
}
