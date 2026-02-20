import { skillsSection } from "@/utils/skillSet";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiNginx, DiSqllite } from "react-icons/di";
import { FaCode, FaCss3Alt, FaDatabase, FaDocker, FaJava, FaNode, FaPython, FaReact } from "react-icons/fa";
import { GoContainer, GoCopilot } from "react-icons/go";
import { GrGraphQl, GrUserWorker } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { IoCloudCircleSharp } from "react-icons/io5";
import { MdGeneratingTokens, MdOutlineSettingsApplications } from "react-icons/md";
import {
  RiBearSmileLine,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiCplusplus, SiExpress, SiJfrogpipelines, SiLangchain, SiMongodb, SiMongoosedotws, SiPostgresql, SiRedis, SiRedux, SiShadcnui, SiSharp, SiTypescript, SiVectorworks } from "react-icons/si";
import { TbBrandOauth, TbDatabaseCog, TbPrompt, TbVector } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";
import { VscAzure, VscSymbolInterface, VscVscode } from "react-icons/vsc";



const Skills = () => {
  const skillsData: skillsSection[] = [
    {
      id: "1",
      icon: <FaReact size={30} className="text-[#a8e6cf]" />,
      title: "FRONTEND",
      heroColor: "#a8e6cf",
      skillProps: [
        {
          skillId: "S1",
          skillName: "Next.js",
          skillIcon: <RiNextjsFill size={20} />,
        },
        { skillId: "S2", skillName: "React.js", skillIcon: <FaReact /> },
        { skillId: "S3", skillName: "Redux.js", skillIcon: <SiRedux /> },
        { skillId: "S4", skillName: "Zustand", skillIcon: <RiBearSmileLine /> },
        { skillId: "S5", skillName: "Shadcn UI", skillIcon: <SiShadcnui /> },
        {
          skillId: "S6",
          skillName: "Tailwind CSS",
          skillIcon: <RiTailwindCssFill />,
        },
        {
          skillId: "S7",
          skillName: "CSS",
          skillIcon: <FaCss3Alt />,
        },
      ],
    },
    {
      id: "2",
      icon: <FaCode size={30} className="text-[#ff6b9d]" />,
      title: "BACKEND",
      heroColor: "#ff6b9d",
      skillProps: [
        { skillId: "B1", skillName: "Dot Net", skillIcon: <AiOutlineDotNet /> },
        { skillId: "B7", skillName: "ASP.Net", skillIcon: <AiOutlineDotNet /> },
        { skillId: "B2", skillName: "Node.js", skillIcon: <FaNode /> },
        { skillId: "B3", skillName: "Express.js", skillIcon: <SiExpress /> },
        {
          skillId: "B4",
          skillName: "REST API",
          skillIcon: <IoCloudCircleSharp />,
        },
        { skillId: "B5", skillName: "Nginx", skillIcon: <DiNginx /> },
        {
          skillId: "B6",
          skillName: "Background Worker",
          skillIcon: <GrUserWorker />,
        },
      ],
    },
    {
      id: "3",
      icon: <IoLogoJavascript size={30} className="text-[#ffd93d]" />,
      title: "LANGUAGES",
      heroColor: "#ffd93d",
      skillProps: [
        { skillId: "L1", skillName: "C#", skillIcon: <SiSharp /> },
        { skillId: "L2", skillName: "JavaScript", skillIcon: <IoLogoJavascript /> },
        { skillId: "L3", skillName: "TypeScript", skillIcon: <SiTypescript /> },
        { skillId: "L4", skillName: "Java", skillIcon: <FaJava /> },
        { skillId: "L5", skillName: "Python", skillIcon: <FaPython /> },
        { skillId: "L6", skillName: "C++", skillIcon: <SiCplusplus /> },
      ],
    },
    {
      id: "4",
      icon: <FaDatabase size={30} className="text-[#ff6b9d]" />,
      title: "DATABASE",
      heroColor: '#ff6b9d',
      skillProps: [
        { skillId: "DB1", skillName: "MongoDB", skillIcon: <SiMongodb /> },
        { skillId: "DB2", skillName: "Redis", skillIcon: <SiRedis /> },
        {
          skillId: "DB3",
          skillName: "PostgreSQL",
          skillIcon: <SiPostgresql />,
        },
        { skillId: "DB4", skillName: "SQL Server", skillIcon: <DiSqllite /> },
        { skillId: "DB5", skillName: "Mongoose", skillIcon: <SiMongoosedotws /> },
        { skillId: "DB6", skillName: "PGVector", skillIcon: <SiVectorworks /> },
      ],
    },
    {
      id: "5",
      icon: <FaCode size={30} className="text-[#ffd93d]" />,
      title: "DEVOPS",
      heroColor: "#ffd93d",
      skillProps: [
        { skillId: "DO1", skillName: "Docker", skillIcon: <FaDocker /> },
        { skillId: "DO2", skillName: "CI/CD", skillIcon: <SiJfrogpipelines /> },
        { skillId: "DO3", skillName: "Azure", skillIcon: <VscAzure /> },
        {
          skillId: "DO4",
          skillName: "Application Deployment",
          skillIcon: <MdOutlineSettingsApplications />,
        },
        {
          skillId: "DO5",
          skillName: "Containerization",
          skillIcon: <GoContainer />,
        },
      ],
    },
    {
      id: "6",
      icon: <FaCode size={30} className="text-[#66d9ef]" />,
      title: "TOOLS",
      heroColor: "#66d9ef",
      skillProps: [
        { skillId: "T1", skillName: "Git", skillIcon: <FaCode /> },
        { skillId: "T2", skillName: "VSCode", skillIcon: <VscVscode /> },
        {
          skillId: "T3",
          skillName: "REST API (design & testing)",
          skillIcon: <IoCloudCircleSharp />,
        },
        { skillId: "T4", skillName: "OAuth", skillIcon: <TbBrandOauth /> },
        { skillId: "T5", skillName: "JWT", skillIcon: <MdGeneratingTokens /> },
        { skillId: "T6", skillName: "GraphQL", skillIcon: <GrGraphQl /> },
        { skillId: "T7", skillName: "Copilot", skillIcon: <GoCopilot /> },
      ],
    },
    {
      id: "7",
      icon: <FaReact size={30} className="text-[#a8e6cf]" />,
      title: "AI INTEGRATION",
      heroColor: "#a8e6cf",
      skillProps: [
        {
          skillId: "AI1",
          skillName: "Prompt engineering",
          skillIcon: <TbPrompt />,
        },
        {
          skillId: "AI2",
          skillName: "LLM APIs",
          skillIcon: <FaCode />,
        },
        {
          skillId: "AI3",
          skillName: "Embeddings & vector DBs",
          skillIcon: <TbVector />,
        },
        {
          skillId: "AI5",
          skillName: "RAG",
          skillIcon: <TiDocumentText />,
        },
        {
          skillId: "AI7",
          skillName: "Inference optimization",
          skillIcon: <VscSymbolInterface />,
        },
        {
          skillId: "AI9",
          skillName: "Data labeling",
          skillIcon: <TbDatabaseCog />,
        },
        {
          skillId: "AI10",
          skillName: "LangChain",
          skillIcon: <SiLangchain />,
        },
      ],
    },
  ];

  return (
    <div className="w-full h-auto flex mb-7 font-space-grotesk">
      <div className="flex w-full flex-col gap-8 px-6 md:px-12">
        <div className="cta-overlay-shell w-fit">
          <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
          <div className="nav-cta relative inline-flex w-fit rounded-lg border-[3px] border-black bg-[#ffd93d] px-6 py-3 text-5xl text-black font-black leading-none">
            <h1>SKILLS</h1>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((section) => (
            <div
              key={section.id}
              className="cta-overlay-shell relative"
            >
              <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
              <div className="cta-overlay-front relative rounded-lg min-h-100 border-[3px] border-black bg-white overflow-hidden">
                <div className="w-full h-3 absolute top-0 left-0" style={{ backgroundColor: section.heroColor }}/>
                <div className="pt-6 px-6">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center">{section.icon}</span>
                    <span className="text-3xl font-black text-black">
                      {section.title}
                    </span>
                  </div>
                  <div className="mt-4 h-1 w-full bg-black" />
                </div>

                <div className="mt-5 px-6 pb-6 flex flex-wrap gap-3">
                  {section.skillProps.map((skill) => (
                    <div
                      key={skill.skillId}
                      className="cta-overlay-shell skill-chip-hover w-fit"
                      style={{ ['--skill-hover-color' as string]: section.heroColor }}
                    >
                      <div className="cta-overlay-back absolute inset-0 rounded-md border-2 border-black bg-black" />
                      <div className="cta-overlay-front cursor-pointer relative flex items-center gap-2 rounded-md border-2 border-black bg-white px-4 py-4 font-semibold text-black whitespace-nowrap">
                        <span className="flex items-center justify-center text-lg" >
                          {skill.skillIcon}
                        </span>
                        <span className="text-lg   leading-tight">{skill.skillName}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
