import HomeBanner from "@/components/Home/HomeBanner";
import HomePartenaires from "@/components/Home/HomePartenaires";
import { getWordpressContent } from "@/actions/getWordpressContent";

import Hero from "@/components/Home/Hero";
import HomeCards from "@/components/Home/HomeCards";

export const revalidate = Number(process.env.REVALIDATE_TIME) || 300;

export async function generateMetadata() {
   const pageData = await getWordpressContent({ id: 2, type: "page" });
   const cleanDescription = (
      pageData.seo.metaDesc ||
      "Cabinet de soins dentaires à Colmar - O2 Dentaire"
   )
      .replace(/[#*]/g, "")
      .slice(0, 160);

   return {
      title:
         pageData.seo.title ||
         "Cabinet de soins médicaux à Colmar - Infirmière 68000",
      description: cleanDescription,
      openGraph: {
         title:
            pageData.seo.title ||
            "Cabinet de soins médicaux à Colmar - Infirmière 68000",
         description: cleanDescription,
         url: "https://infirmiere68000.fr",
         type: "website",
         siteName: "Infirmière 68000",
      },
   };
}

export default async function Home() {
   const data = await getWordpressContent({ id: 2, type: "page" });
   return (
      <>
         <Hero data={data} />
         <HomeCards data={data} />
         <HomeBanner data={data} />
         <HomePartenaires data={data} />
      </>
   );
}
