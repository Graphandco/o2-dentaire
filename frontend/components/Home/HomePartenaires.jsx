import Image from "next/image";

export default function HomePartenaires({ partenaires }) {
   return (
      <section className="py-20">
         <div className="wrapper">
            <h2 className="text-4xl font-bold">Nos partenaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
               {partenaires.map((partenaire) => (
                  <a href={partenaire.link} target="_blank" key={partenaire.id}>
                     <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${partenaire.image.url}`}
                        alt={partenaire.name}
                        width={300}
                        height={200}
                     />
                  </a>
               ))}
            </div>
         </div>
      </section>
   );
}
