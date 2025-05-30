import { getStrapiUnique } from "@/actions/getStrapiUnique";
import { getStrapiCollections } from "@/actions/getStrapiCollections";
import HomeBanner from "@/components/Home/HomeBanner";
import HomePartenaires from "@/components/Home/HomePartenaires";

import Hero from "@/components/Home/Hero";
import HomeCards from "@/components/Home/HomeCards";

const hero = await getStrapiUnique({ type: "page-d-accueil" });
const cards = await getStrapiCollections("home-cards");
const banner = await getStrapiUnique({ type: "home-banner" });
const partenaires = await getStrapiCollections("partenaires");

export async function generateMetadata() {
   return {
      title: hero.meta_title || "Accueil",
      description: (hero.meta_description || "")
         .replace(/[#*]/g, "")
         .slice(0, 160),
   };
}

export default async function Home() {
   return (
      <>
         {/* <Hero title={hero_text} image={hero_image} /> */}
         <Hero hero={hero} />
         <HomeCards cards={cards} />
         <HomeBanner banner={banner} />
         <HomePartenaires partenaires={partenaires} />
      </>
   );
}
