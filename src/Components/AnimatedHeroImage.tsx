"use client";

import { Code, HardDrive, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedHeroImage = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative">
        <motion.div
          className="absolute -left-12 top-2 z-10 flex h-24 w-24 items-center justify-center rounded-lg border-4 border-black bg-[#67d6ea] shadow-[7px_7px_0_#000]"
          animate={{ y: [0, -8, 0] }}
          initial={{ rotate: 10 }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Code className="text-black" size={56} />
        </motion.div>

        <motion.div
          className="absolute -left-20 top-72 flex h-24 w-24 items-center justify-center rounded-lg border-4 border-black bg-[#baf3d7] shadow-[7px_7px_0_#000]"
          animate={{ x: [-6, 6, -6] }}
          initial={{ rotate: -10 }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <HardDrive className="text-black" size={56} />
        </motion.div>

        <div className="absolute right-6 top-2 h-11 w-28 rotate-6 rounded-sm border-2 border-black bg-[#f6db4f]" />

        <motion.div
          className="relative z-0 rounded-2xl border-4 border-black bg-[#8ed3f0] p-7 shadow-[8px_8px_0_#000]"
          initial={{ rotate: -3 }}
          whileHover={{ rotate: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <Image
            src="https://marjoballabani.me/image/avatar-gpt.png"
            alt="Marjo Ballabani"
            width={360}
            height={360}
            className="rounded-xl border-4 border-black bg-[#8ed3f0] object-cover"
          />
        </motion.div>
        <div className="absolute -right-8 top-72 flex h-20 w-20 items-center justify-center rounded-lg border-4 border-black bg-[#ffd24c] shadow-[4px_4px_0_#000]">
          <Terminal className="text-black" size={40} />
        </div>

        <div className="absolute -bottom-7 right-0 rounded-lg border-4 border-black bg-[#baf3d7] px-6 py-2 text-sm font-bold shadow-[4px_4px_0_#000] text-black">
          Full-Stack Ninja
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeroImage;
