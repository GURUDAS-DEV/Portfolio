"use client";

import { Code, HardDrive, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const AnimatedHeroImage = () => {
  return (
    <div className="relative flex items-center justify-center pt-6 lg:pt-0">
      <div className="relative">
        <motion.div
          className="absolute -left-5 top-1 z-10 flex h-14 w-14 items-center justify-center rounded-lg border-4 border-black bg-[#67d6ea] shadow-[5px_5px_0_#000] sm:-left-8 sm:h-18 sm:w-18 md:-left-12 md:h-24 md:w-24 md:shadow-[7px_7px_0_#000]"
          animate={{ y: [0, -8, 0] }}
          initial={{ rotate: 10 }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Code className="text-black" size={32} />
        </motion.div>

        <motion.div
          className="absolute -left-6 top-56 flex h-14 w-14 items-center justify-center rounded-lg border-4 border-black bg-[#baf3d7] shadow-[5px_5px_0_#000] sm:-left-10 sm:top-64 sm:h-18 sm:w-18 md:-left-20 md:top-72 md:h-24 md:w-24 md:shadow-[7px_7px_0_#000]"
          animate={{ x: [-6, 6, -6] }}
          initial={{ rotate: -10 }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <HardDrive className="text-black" size={30} />
        </motion.div>

        <div className="absolute right-4 top-1 h-8 w-20 rotate-6 rounded-sm border-2 border-black bg-[#f6db4f] sm:right-5 sm:top-2 sm:h-9 sm:w-24 md:right-6 md:h-11 md:w-28" />

        <motion.div
          className="relative z-0 rounded-2xl border-4 border-black bg-[#8ed3f0] p-4 shadow-[6px_6px_0_#000] sm:p-5 md:p-7 md:shadow-[8px_8px_0_#000]"
          initial={{ rotate: -3 }}
          whileHover={{ rotate: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/HeroImage.png"
            alt="Gurudas"
            width={300}
            height={300}
            className="rounded-xl border-4 border-black bg-[#8ed3f0] object-cover h-75 w-75"
          />
        </motion.div>
        <div className="absolute -right-4 top-56 flex h-14 w-14 items-center justify-center rounded-lg border-4 border-black bg-[#ffd24c] shadow-[4px_4px_0_#000] sm:-right-6 sm:top-64 sm:h-16 sm:w-16 md:-right-8 md:top-72 md:h-20 md:w-20">
          <Terminal className="text-black" size={26} />
        </div>

        <div className="absolute -bottom-5 right-0 rounded-lg border-4 border-black bg-[#baf3d7] px-4 py-1.5 text-xs font-bold text-black shadow-[4px_4px_0_#000] sm:-bottom-6 sm:px-5 sm:py-2 sm:text-sm md:-bottom-7 md:px-6">
          Full-Stack Ninja
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeroImage;
