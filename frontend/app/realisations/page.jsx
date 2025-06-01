import PageHeader from "@/components/PageHeader";
import ImageModal from "@/components/Realisations";
import { getStrapiUnique } from "@/actions/getStrapiUnique";
import Realisations from "@/components/Realisations";

export default async function RealisationsPage() {
   const galerie = await getStrapiUnique({ type: "galerie" });
   const { realisations } = galerie;

   return (
      <>
         {/* <PageHeader title="Nos réalisations" /> */}
         <Realisations images={realisations} />
      </>
   );
}
