"use client";

import {
  ArrowUpRight,
  Coffee,
  Code,
  Github,
  HardDrive,
  Linkedin,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { DiReact } from "react-icons/di";
import { FaDocker, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { RiNextjsLine } from "react-icons/ri";
import { SiDotnet, SiLeetcode, SiTypescript } from "react-icons/si";

interface skillList {
  id : string;
  title: string;
  icon: React.ReactNode;
}

const HeroSection = () => {
  const skills: skillList[] = [
    {
        id : "1",
      title: "Node.js",
      icon: <IoLogoNodejs size={20} />,
    },
    {
        id : "2",
      title: "Dot Net",
      icon: <SiDotnet size={20} />,
    },
    {
        id : "3",
      title: "Next.js",
      icon: <RiNextjsLine size={20} />,
    },
    {
        id : "4",
      title: "React.js",
      icon: <DiReact size={20} />,
    },
    {
        id : "5",
      title: "C Sharp",
      icon: <SiDotnet size={20} />,
    },
    {
        id : '6',
      title: "Typescript",
      icon: <SiTypescript size={20} />,
    },
    {
        id : '7',
      title: "Docker",
      icon: <FaDocker size={20} />,
    },
  ];

  return (
    <section className="w-full px-10 pb-10 pt-6 font-space-grotesk">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-2xl font-bold text-sky-400">
            <span>Hi there! 👋</span>
          </div>

          <h1 className="text-6xl font-black tracking-tight text-black">
            I&apos;m Gurudas Bhardwaj.
          </h1>

          <p className="max-w-xl text-lg leading-7  text-black/80">
            I'm a passionate software engineer with expertise in building
            scalable and efficient applications. I specialize in full-stack
            development, cloud technologies, and bulding Real world application.
          </p>

          <div className="flex items-center gap-4">
            <div className="cta-overlay-shell">
              <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
              <Link
                href="https://github.com/GURUDAS-DEV"
                target="_blank"
                rel="noreferrer"
                className="nav-cta cta-overlay-front  flex h-11 w-11 items-center justify-center rounded-md border-3 border-black bg-white"
                aria-label="GitHub"
              >
                <FaGithub className="text-black" size={20} />
              </Link>
            </div>
            <div className="cta-overlay-shell">
              <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
              <Link
                href="https://www.linkedin.com/in/gurudas-bhardwaj-b900a5314/"
                target="_blank"
                rel="noreferrer"
                className="nav-cta cta-overlay-front  flex h-11 w-11 items-center justify-center rounded-md border-3 border-black bg-white"
                aria-label="Linkedin"
              >
                <FaLinkedin className="text-black" size={20} />
              </Link>
            </div>
            <div className="cta-overlay-shell">
              <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
              <Link
                href="https://leetcode.com/u/GurudasBhardwaj/"
                target="_blank"
                rel="noreferrer"
                className="nav-cta cta-overlay-front  flex h-11 w-11 items-center justify-center rounded-md border-3 border-black bg-white"
                aria-label="Leetcode"
              >
                <SiLeetcode className="text-black" size={20} />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="cta-overlay-shell">
              <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
              <button className="nav-cta cta-overlay-front rounded-lg border-3 border-black cursor-pointer bg-[#67d6ea] px-10 py-4 text-md text-black font-black ">
                Get in Touch!
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative">
            <motion.div
              className="absolute -left-12 top-2 z-10 flex h-24 w-24 items-center justify-center rounded-lg border-4 border-black bg-[#67d6ea] shadow-[7px_7px_0_#000]"
              animate={{ y: [0, -8, 0] }}
              initial = {{rotate : 10}}
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
              initial = {{rotate : -10}}
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
              initial={{ rotate:-3 }}
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
      </div>
      <div className="w-full pt-6 flex justify-center items-center">
        <div className="flex flex-wrap items-center gap-6 pt-14">
          {skills.map((skill) => (
            <div key={skill.id} className="cta-overlay-shell">
              <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
              <div className="nav-cta cta-overlay-front rounded-lg border-2 flex gap-2 text-black border-black bg-white px-7 hover:bg-[#ffd93d] cursor-pointer py-3 text-md font-semibold">
                {skill.icon} {skill.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
