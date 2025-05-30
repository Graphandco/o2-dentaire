import Image from "next/image";

export default function HeaderLogo() {
   return (
      <div className="">
         <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
   );
}
