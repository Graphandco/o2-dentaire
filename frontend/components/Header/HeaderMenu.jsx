"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HeaderMenu() {
   const [open, setOpen] = useState(false);
   const toggleMenu = () => setOpen(!open);
   const pathname = usePathname();

   const navLinks = [
      {
         title: "Accueil",
         href: "/",
      },
      {
         title: "Nos réalisations",
         href: "/realisations",
      },
      {
         title: "Contact",
         href: "/contact",
      },
   ];

   return (
      <nav className="bg-white rounded-full border border-neutral-500 sm:px-8 sm:py-3 flex items-center">
         <div className="sm:hidden relative z-50">
            <button
               onClick={toggleMenu}
               aria-label="Toggle Menu"
               className="p-2 focus:outline-none"
            >
               {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            <AnimatePresence>
               {open && (
                  <motion.nav
                     initial={{ x: "100%" }}
                     animate={{ x: 0 }}
                     exit={{ x: "100%" }}
                     transition={{ duration: 0.2 }}
                     className="fixed inset-0 bg-black/90 text-white flex flex-col items-center justify-center space-y-6"
                  >
                     {navLinks.map((link) => (
                        <Link
                           key={link.href}
                           onClick={toggleMenu}
                           href={link.href}
                           className="text-2xl"
                        >
                           {link.title}
                        </Link>
                     ))}

                     <div
                        className="absolute top-7 right-7"
                        onClick={toggleMenu}
                     >
                        <X size={28} />
                     </div>
                  </motion.nav>
               )}
            </AnimatePresence>
         </div>
         <div className="hidden sm:flex items-center gap-6 text-lg">
            {navLinks.map((link) => (
               <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-primary ${
                     pathname === link.href ||
                     pathname.startsWith(link.href + "/")
                        ? "text-primary"
                        : "text-black"
                  }`}
               >
                  {link.title}
               </Link>
            ))}
         </div>
      </nav>
   );
}
