import { getStrapiPageBySlug } from "@/actions/getStrapiCollections";
import { marked } from "marked";

export default async function PolitiqueDeConfidentialite() {
   const politique = await getStrapiPageBySlug("politique-de-confidentialite");

   return (
      <div className="wrapper prose mt-20">
         <h1>{politique.title}</h1>

         <div
            dangerouslySetInnerHTML={{
               __html: marked.parse(politique.content || ""),
            }}
         />
      </div>
   );
}
