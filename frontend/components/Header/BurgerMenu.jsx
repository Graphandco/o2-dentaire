"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function BurgerMenu() {
   const [open, setOpen] = useState(false);

   const toggleMenu = () => setOpen(!open);

   return (
      <div className="md:hidden relative z-50">
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
                  <a href="/" onClick={toggleMenu} className="text-2xl">
                     Accueil
                  </a>
                  <a href="/about" onClick={toggleMenu} className="text-2xl">
                     À propos
                  </a>
                  <a href="/contact" onClick={toggleMenu} className="text-2xl">
                     Contact
                  </a>
                  <div className="absolute top-7 right-7" onClick={toggleMenu}>
                     <X size={28} />
                  </div>
               </motion.nav>
            )}
         </AnimatePresence>
      </div>
   );
}
