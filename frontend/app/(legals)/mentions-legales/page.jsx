import { getStrapiPageBySlug } from "@/actions/getStrapiCollections";
import { marked } from "marked";

export default async function MentionsLegales() {
   const mentions = await getStrapiPageBySlug("mentions-legales");

   return (
      <div className="wrapper prose mt-20">
         <h1>{mentions.title}</h1>

         <div
            dangerouslySetInnerHTML={{
               __html: marked.parse(mentions.content || ""),
            }}
         />
      </div>
   );
}
