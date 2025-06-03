import Image from "next/image";

import { getStrapiCollections } from "@/actions/getStrapiCollections";
import ContactItem from "./ContactItem";

export default async function ContactPage() {
   const contacts = await getStrapiCollections("contacts");

   return (
      <div className="mt-20 bg-radius mx-7 py-15 flex flex-col gap-10">
         <h1>Contact</h1>
         <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center gap-10">
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
