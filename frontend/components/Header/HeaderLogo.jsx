import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo() {
   return (
      <div className="">
         <Link href="/">
            <Image
               src="/logo.png"
               alt="Logo"
               width={100}
               height={100}
               priority
            />
         </Link>
      </div>
   );
}
