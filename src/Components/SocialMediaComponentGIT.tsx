"use client";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const SocialMediaComponentGIT = () => {
  const shouldReduceMotion = useReducedMotion();
  const socialCards = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin className="text-3xl sm:text-4xl" />,
      bgColor: "#66d9ef",
      tapeColor: "#ffd93d",
      url: "https://www.linkedin.com/in/gurudas-bhardwaj-b900a5314/",
      rotation: -3,
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub className="text-3xl sm:text-4xl" />,
      bgColor: "#ffd93d",
      tapeColor: "#ffd93d",
      url: "https://github.com/GURUDAS-DEV",
      rotation: 2,
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagram className="text-3xl sm:text-4xl" />,
      bgColor: "#ff6b9d",
      tapeColor: "#ffd93d",
      url: "https://www.instagram.com/whynott_.gurudas",
      rotation: -2,
    },
  ];

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-6 py-8 sm:gap-10 sm:py-10 md:gap-12 md:py-12">
      {socialCards.map((card) => (
        <Link
          href={card.url}
          target="_blank"
          rel="noreferrer"
          key={card.id}
          className="group"
        >
          <motion.div
            className="relative"
            initial={{ rotate: shouldReduceMotion ? 0 : card.rotation }}
            whileHover={shouldReduceMotion ? {} : { rotate: 0, scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {/* Tape effect at the top */}
            <div
              className="absolute -top-3 right-6 h-8 w-20 rotate-12 rounded-sm border-2 border-black dark:border-[#a8e6cf] z-10 sm:-top-4 sm:right-8 sm:h-10 sm:w-24"
              style={{ backgroundColor: card.tapeColor, opacity: 0.7 }}
            />

            {/* Card shadow */}
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-lg border-4 border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />

            {/* Card content */}
            <div
              className="relative flex h-44 w-72 flex-col items-center justify-center gap-4 rounded-lg border-4 border-black dark:border-[#a8e6cf] shadow-lg sm:h-48 sm:w-75 sm:gap-5 md:h-54 md:w-82.5 md:gap-6"
              style={{ backgroundColor: card.bgColor }}
            >
              <div className="text-black ">{card.icon}</div>
              <h3
                className="font-edu-nsw-act-cursive text-base font-semibold text-black sm:text-lg"
              >
                {card.name}
              </h3>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaComponentGIT;
