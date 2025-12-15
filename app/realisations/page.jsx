import Realisations from "@/components/Realisations";
import { getWordpressContent } from "@/actions/getWordpressContent";

export const revalidate = Number.parseInt(process.env.REVALIDATE_TIME || '300', 10);

export async function generateMetadata() {
   const pageData = await getWordpressContent({ id: 47, type: "page" });
   const cleanDescription = (
      pageData.seo.metaDesc ||
      "Découvrez les réalisations de O² Dentaire pour les clients qui nous font confiance"
   )
      .replace(/[#*]/g, "")
      .slice(0, 160);

   return {
      title:
         pageData.seo.title ||
         `${pageData.title} - O² Dentaire`,
      description: cleanDescription,
      openGraph: {
         title:
            pageData.seo.title ||
            `${pageData.title} - O² Dentaire`,
         description: cleanDescription,
         url: "https://o2-dentaire.fr/realisations",
         type: "website",
         siteName: "O2 Dentaire",
      },
   };
}

export default async function RealisationsPage() {
   const data = await getWordpressContent({ id: 47, type: "page" });

   return (
      <>
         {/* <PageHeader title="Nos réalisations" /> */}
         <Realisations data={data} />
      </>
   );
}
