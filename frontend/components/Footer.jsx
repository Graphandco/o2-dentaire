import Image from "next/image";
import Link from "next/link";

export default function Footer() {
   return (
      <footer className="bg-primary">
         <div className="wrapper py-5 flex flex-wrap items-center justify-between gap-2">
            <nav className="flex flex-wrap gap-x-4 gap-y-2">
               <Link href="/mentions-legales">Mentions légales</Link>
               <Link href="/politique-de-confidentialite">
                  Politique de confidentialité
               </Link>
               <Link href="/cgv">CGV</Link>
            </nav>
            <Link
               className="flex itelm-center gap-2"
               href="https://graphandco.com"
               target="_blank"
            >
               <Image
                  src="/logo-graphandco.svg"
                  alt="Graph and Co"
                  width={20}
                  height={20}
               />
               <span>{new Date().getFullYear()} ©Graph and Co</span>
            </Link>
         </div>
      </footer>
   );
}
