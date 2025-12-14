"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const transition = {
   type: "spring",
   damping: 25,
   stiffness: 120,
};

export const ImageModalScroll = () => {
   const [isOpen, setOpen] = useState(false);

   // Ferme la modal lors du scroll
   useEffect(() => {
      if (!isOpen) return;

      const handleScroll = () => {
         setOpen(false);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [isOpen]);

   return (
      <div className={`image-container ${isOpen ? "open" : ""}`}>
         <motion.div
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={transition}
            className="shade fixed inset-0 bg-black/50 z-40"
            onClick={() => setOpen(false)}
         />
         <motion.img
            src="/logo-graphandco.svg"
            alt="Bimhuis in Amsterdam"
            onClick={() => setOpen(!isOpen)}
            transition={transition}
            className="z-50 relative cursor-pointer"
         />
      </div>
   );
};
