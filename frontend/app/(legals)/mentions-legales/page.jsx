import { getWordpressContent } from "@/actions/getWordpressContent";

export default async function MentionsLegales() {
   const data = await getWordpressContent({ id: 82, type: "page" });

   return (
      <div className="wrapper prose mt-20">
         <h1>{data.title}</h1>

         <div
            className="prose mb-5"
            dangerouslySetInnerHTML={{ __html: data.content }}
         />
      </div>
   );
}
