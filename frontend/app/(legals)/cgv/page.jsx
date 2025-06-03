import { getStrapiPageBySlug } from "@/actions/getStrapiCollections";
import { marked } from "marked";

export default async function CGV() {
   const cgv = await getStrapiPageBySlug("cgv");

   return (
      <div className="wrapper prose mt-20">
         <h1>{cgv.title}</h1>
         <div
            dangerouslySetInnerHTML={{
               __html: marked.parse(cgv.content || ""),
            }}
         />
      </div>
   );
}
