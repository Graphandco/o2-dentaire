import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

export default function HeaderWrapper() {
   return (
      <header
         id="header"
         className="sticky z-50 top-5 w-full flex justify-center items-center gap-4"
      >
         <HeaderLogo />
         <HeaderMenu />
      </header>
   );
}
