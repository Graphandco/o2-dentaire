import HeaderLogo from "./HeaderLogo";
import BurgerMenu from "./BurgerMenu";

export default function HeaderWrapper() {
   return (
      <header id="header" className="bg-foreground text-white">
         <div className="wrapper py-3 flex items-center justify-between">
            <HeaderLogo />
            <BurgerMenu />
         </div>
      </header>
   );
}
