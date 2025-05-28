import Image from "next/image";

export default function HomePartenaires({ partenaires }) {
   return (
      <section className="py-20">
         <div className="wrapper">
            <h2 className="text-4xl font-bold">Nos partenaires</h2>
            <div className="flex flex-wrap items-center gap-10">
               {partenaires.map((partenaire) => (
                  <a href={partenaire.link} target="_blank" key={partenaire.id}>
                     <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${partenaire.image.url}`}
                        alt="Logo de l'entreprise"
                        width={300}
                        height={200}
                        className="w-auto h-10 object-contain"
                     />
                  </a>
               ))}
            </div>
         </div>
      </section>
   );
}
