import Image from "next/image";
import { getWordpressContent } from "@/actions/getWordpressContent";
import ContactItem from "@/components/ContactItem";
import { ArrowUpRight } from "lucide-react";

export const revalidate = Number.parseInt(
   process.env.REVALIDATE_TIME || "300",
   10
);

export async function generateMetadata() {
   const pageData = await getWordpressContent({ id: 64, type: "page" });
   const cleanDescription = (
      pageData.seo.metaDesc ||
      "Contactez O² Dentaire, votre cabinet de prothésiste dentaire à Colmar"
   )
      .replace(/[#*]/g, "")
      .slice(0, 160);

   return {
      title: pageData.seo.title || `${pageData.title} - O² Dentaire`,
      description: cleanDescription,
      openGraph: {
         title: pageData.seo.title || `${pageData.title} - O² Dentaire`,
         description: cleanDescription,
         url: "https://o2-dentaire.fr/contact",
         type: "website",
         siteName: "O2 Dentaire",
      },
   };
}

export default async function ContactPage() {
   const data = await getWordpressContent({ id: 64, type: "page" });

   return (
      <div className="mt-20 bg-radius mx-7 py-15 flex flex-col gap-10 p-3 ">
         <div className="bg-white rounded-lg p-5 w-fit">
            <div className="flex justify-end md:mb-6">
               <ArrowUpRight size={50} />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
               {data.title}
            </h1>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-center gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
               {data.acf.contacts.map((contact) => (
                  <ContactItem key={contact.id} contact={contact} />
               ))}
            </div>
            <Image
               src="/carte-alsace.png"
               alt="Carte Alsace"
               width={500}
               height={500}
            />
         </div>
      </div>
   );
}
