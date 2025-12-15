import { getWordpressContent } from "@/actions/getWordpressContent";

export const revalidate = 300;

export async function generateMetadata() {
   const pageData = await getWordpressContent({ id: 82, type: "page" });
   const cleanDescription = (
      pageData.seo.metaDesc ||
      "Mentions légales d'O² Dentaire, cabinet de prothésiste dentaire à Colmar"
   )
      .replace(/[#*]/g, "")
      .slice(0, 160);

   return {
      title:
         pageData.seo.title ||
         `${pageData.title} - O² Dentaire`,
      description: cleanDescription,
      robots: {
         index: false,
         follow: false,
      },
      openGraph: {
         title:
            pageData.seo.title ||
            `${pageData.title} - O² Dentaire`,
         description: cleanDescription,
         url: "https://o2-dentaire.fr/mentions-legales",
         type: "website",
         siteName: "O2 Dentaire",
      },
   };
}

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
