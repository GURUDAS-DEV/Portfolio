"use client";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const SocialMediaComponentGIT = () => {
  const socialCards = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={40} />,
      bgColor: "#66d9ef",
      tapeColor: "#ffd93d",
      url: "https://www.linkedin.com/in/gurudas-bhardwaj-b900a5314/",
      rotation: -3,
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub size={40} />,
      bgColor: "#ffd93d",
      tapeColor: "#ffd93d",
      url: "https://github.com/GURUDAS-DEV",
      rotation: 2,
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagram size={40} />,
      bgColor: "#ff6b9d",
      tapeColor: "#ffd93d",
      url: "https://www.instagram.com/whynott_.gurudas",
      rotation: -2,
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-12 py-12">
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
            initial={{ rotate: card.rotation }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {/* Tape effect at the top */}
            <div
              className="absolute -top-4 right-8 w-24 h-10 rotate-12 rounded-sm border-2 border-black z-10"
              style={{ backgroundColor: card.tapeColor, opacity: 0.7 }}
            />

            {/* Card shadow */}
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-lg border-4 border-black bg-black" />

            {/* Card content */}
            <div
              className="relative w-[330px] h-54 rounded-lg border-4 border-black flex flex-col items-center justify-center gap-6 shadow-lg"
              style={{ backgroundColor: card.bgColor }}
            >
              <div className="text-black ">{card.icon}</div>
              <h3
                className="text-lg font-edu-nsw-act-cursive font-semibold    text-black"
                
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
