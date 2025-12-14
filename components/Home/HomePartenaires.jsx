import Image from "next/image";

export default function HomePartenaires({ data }) {
   return (
      <section className="py-10 bg-radius my-16 mx-7">
         <div className="wrapper grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
            <div className="flex flex-col gap-6">
               <h2 className="text-4xl font-bold">Nos partenaires</h2>
               <p className="text-lg">
                  Nous sommes fiers de travailler avec des entreprises de
                  qualité.
               </p>
            </div>
            <div className="flex flex-wrap items-center gap-10">
               {data.acf.partenaires.map((partenaire, index) => (
                  <a href={partenaire.link} target="_blank" key={index}>
                     <Image
                        src={partenaire.image.url}
                        alt="Logo de l'entreprise"
                        width={300}
                        height={200}
                        className="w-auto h-10 object-contain hover:scale-105 transition-all duration-300"
                     />
                  </a>
               ))}
            </div>
         </div>
      </section>
   );
}
