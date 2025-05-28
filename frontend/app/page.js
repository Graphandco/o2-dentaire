import { getStrapiUnique } from "@/actions/getStrapiUnique";
import { getStrapiCollections } from "@/actions/getStrapiCollections";
import Hero from "@/components/Home/Hero";
import HomeCard from "@/components/Home/HomeCard";
import HomeBanner from "@/components/Home/HomeBanner";
import HomePartenaires from "@/components/Home/HomePartenaires";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const hero = await getStrapiUnique({ type: "page-d-accueil" });
const cards = await getStrapiCollections("home-cards");
const banner = await getStrapiUnique({ type: "home-banner" });
const partenaires = await getStrapiCollections("partenaires");

const { hero_text, hero_image, meta_title, meta_description } = hero;

export async function generateMetadata() {
   return {
      title: meta_title || "Accueil",
      description: (meta_description || "").replace(/[#*]/g, "").slice(0, 160),
   };
}

export default async function Home() {
   return (
      <div>
         <Hero title={hero_text} image={hero_image} />
         <section className="py-20">
            <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
               {cards.map((card) => (
                  <HomeCard key={card.id} card={card} />
               ))}
            </div>
            <div className="mt-10 text-center">
               <Button>
                  <Link href="/realisations">Voir nos réalisations</Link>
               </Button>
            </div>
         </section>
         <HomeBanner banner={banner} />
         <HomePartenaires partenaires={partenaires} />
      </div>
   );
}
