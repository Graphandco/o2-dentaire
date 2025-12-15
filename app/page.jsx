import HomeBanner from "@/components/Home/HomeBanner";
import HomePartenaires from "@/components/Home/HomePartenaires";
import { getWordpressContent } from "@/actions/getWordpressContent";

import Hero from "@/components/Home/Hero";
import HomeCards from "@/components/Home/HomeCards";

export const revalidate = Number.parseInt(
   process.env.REVALIDATE_TIME || "300",
   10
);

export async function generateMetadata() {
   const pageData = await getWordpressContent({ id: 2, type: "page" });
   const cleanDescription = (
      pageData.seo.metaDesc ||
      "L’expertise O² Dentaire au sein de votre cabinet de prothésiste dentaire"
   )
      .replace(/[#*]/g, "")
      .slice(0, 160);

   return {
      title:
         pageData.seo.title ||
         "L’expertise O² Dentaire au sein de votre cabinet de prothésiste dentaire",
      description: cleanDescription,
      openGraph: {
         title:
            pageData.seo.title ||
            "L’expertise O² Dentaire au sein de votre cabinet de prothésiste dentaire",
         description: cleanDescription,
         url: "https://o2-dentaire.fr",
         type: "website",
         siteName: "O2 Dentaire",
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
