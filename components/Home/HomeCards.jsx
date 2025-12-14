import HomeCard from "@/components/Home/HomeCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomeCards({ data }) {
   return (
      <section className="mt-7 mb-16 mx-7 py-15 bg-radius">
         <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {data.acf.cards.map((card) => (
               <HomeCard key={card.title} card={card} />
            ))}
         </div>
         <div className="mt-16 text-center">
            <Button size="lg">
               <Link href="/realisations">Voir nos réalisations</Link>
            </Button>
         </div>
      </section>
   );
}
