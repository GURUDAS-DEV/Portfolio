import Link from "next/link";
import { DiReact } from "react-icons/di";
import { FaDocker, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { RiNextjsLine } from "react-icons/ri";
import { SiDotnet, SiLeetcode, SiTypescript } from "react-icons/si";
import AnimatedHeroImage from "./AnimatedHeroImage";

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
    <section className="w-full px-5 pb-8 pt-4 text-black dark:text-white font-space-grotesk sm:px-8 sm:pt-6 md:px-10 md:pb-10">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-xl font-bold text-sky-400 sm:text-2xl">
            <span>Hi there! 👋</span>
          </div>

          <h1 className="text-4xl font-black tracking-tight  sm:text-5xl lg:text-6xl">
            I&apos;m Gurudas Bhardwaj.
          </h1>

          <p className="max-w-xl text-base leading-7 /80 sm:text-lg">
            I'm a passionate software engineer with expertise in building
            scalable and efficient applications. I specialize in full-stack
            development, cloud technologies, and bulding Real world application.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="cta-overlay-shell">
              <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
              <Link
                href="https://github.com/GURUDAS-DEV"
                target="_blank"
                rel="noreferrer"
                className="nav-cta cta-overlay-front flex h-10 w-10 items-center justify-center rounded-md border-3 border-black dark:border-[#a8e6cf] bg-white dark:bg-stone-800 sm:h-11 sm:w-11"
                aria-label="GitHub"
              >
                <FaGithub className="" size={18} />
              </Link>
            </div>
            <div className="cta-overlay-shell">
              <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
              <Link
                href="https://www.linkedin.com/in/gurudas-bhardwaj-b900a5314/"
                target="_blank"
                rel="noreferrer"
                className="nav-cta cta-overlay-front flex h-10 w-10 items-center justify-center rounded-md border-3 border-black dark:border-[#a8e6cf] bg-white dark:bg-stone-800 sm:h-11 sm:w-11"
                aria-label="Linkedin"
              >
                <FaLinkedin className="" size={18} />
              </Link>
            </div>
            <div className="cta-overlay-shell">
              <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
              <Link
                href="https://leetcode.com/u/GurudasBhardwaj/"
                target="_blank"
                rel="noreferrer"
                className="nav-cta cta-overlay-front flex h-10 w-10 items-center justify-center rounded-md border-3 border-black dark:border-[#a8e6cf] bg-white dark:bg-stone-800 sm:h-11 sm:w-11"
                aria-label="Leetcode"
              >
                <SiLeetcode className="" size={18} />
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="cta-overlay-shell">
              <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
              <button className="nav-cta cta-overlay-front cursor-pointer rounded-lg border-3 border-black dark:border-[#a8e6cf] bg-[#67d6ea] px-6 py-3 text-sm font-black  sm:px-8 sm:py-4 sm:text-base">
                Get in Touch!
              </button>
            </div>
          </div>
        </div>

        <AnimatedHeroImage />
      </div>
      <div className="flex w-full items-center justify-center pt-4 sm:pt-6">
        <div className="flex flex-wrap items-center justify-center gap-3 pt-8 sm:gap-4 sm:pt-10 md:gap-6 md:pt-14">
          {skills.map((skill) => (
            <div key={skill.id} className="cta-overlay-shell">
              <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black dark:bg-[#a8e6cf]" />
              <div className="nav-cta cta-overlay-front flex cursor-pointer gap-2 rounded-lg border-2 border-black dark:border-[#a8e6cf] bg-white dark:bg-stone-800 px-4 py-2.5 text-sm font-semibold  hover:bg-[#ffd93d] sm:px-6 sm:py-3 sm:text-base">
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
