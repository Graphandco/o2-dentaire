import Image from "next/image";

export default function ContactItem({ contact }) {
   return (
      <div className="grid justify-items-center">
         <Image
            src={contact.image.url}
            alt={contact.name}
            width={125}
            height={125}
            className="relative z-10 rounded-full border-2 border-primary"
         />
         <div className="relative z-0 bg-white p-5 py-10 -mt-5 rounded-lg grid justify-items-center">
            <div className="mb-3 text-xl text-center font-bold text-black">
               {contact.name}
            </div>
            <div dangerouslySetInnerHTML={{ __html: contact.content }} />{" "}
         </div>
      </div>
   );
}
