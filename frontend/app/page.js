import { getStrapiUnique } from "@/actions/getStrapiUnique";
import Hero from "@/components/Hero";

const hero = await getStrapiUnique({ type: "page-d-accueil" });
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
      </div>
   );
}
