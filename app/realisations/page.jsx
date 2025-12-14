import Realisations from "@/components/Realisations";
import { getWordpressContent } from "@/actions/getWordpressContent";

export default async function RealisationsPage() {
   const data = await getWordpressContent({ id: 47, type: "page" });

   return (
      <>
         {/* <PageHeader title="Nos réalisations" /> */}
         <Realisations data={data} />
      </>
   );
}
