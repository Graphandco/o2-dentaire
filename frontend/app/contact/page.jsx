import Image from "next/image";

import { getStrapiCollections } from "@/actions/getStrapiCollections";
import ContactItem from "./ContactItem";
import { ArrowUpRight } from "lucide-react";

export default async function ContactPage() {
   const contacts = await getStrapiCollections("contacts");

   return (
      <div className="mt-20 bg-radius mx-7 py-15 flex flex-col gap-10 p-3 ">
         <div className="bg-white rounded-lg p-5 w-fit">
            <div className="flex justify-end md:mb-6">
               <ArrowUpRight size={50} />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
               Nous contacter
            </h1>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-center gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
               {contacts.map((contact) => (
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
