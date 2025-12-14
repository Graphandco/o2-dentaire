import { getWordpressContent } from "@/actions/getWordpressContent";

export const revalidate = Number(process.env.REVALIDATE_TIME) || 300;

export async function generateMetadata() {
   const pageData = await getWordpressContent({ id: 86, type: "page" });
   const cleanDescription = (
      pageData.seo.metaDesc ||
      "Politique de confidentialité d'O² Dentaire. Comment nous protégeons et utilisons vos données personnelles"
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
         url: "https://o2-dentaire.fr/politique-de-confidentialite",
         type: "website",
         siteName: "O2 Dentaire",
      },
   };
}

export default async function PolitiqueDeConfidentialite() {
   const data = await getWordpressContent({ id: 86, type: "page" });

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
