
import ProjectJourneyClient from "./ProjectJourneyClient";

// Server Component — layout & static markup only
const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto w-full flex justify-center items-center text-black dark:text-white flex-col px-6 py-12 md:px-7 lg:px-13"
    >
      {/* Section heading */}
      <div className="mb-16 w-full flex justify-center flex-col items-center font-space-grotesk">
        <div className="cta-overlay-shell  w-full">
          <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black dark:bg-[#a8e6cf]" />
          <div className="nav-cta  relative inline-flex justify-center w-full rounded-lg border-[3px] border-black bg-white dark:bg-[#2A2A2A] dark:border-[#a8e6cf] py-5 text-3xl font-black leading-none  sm:px-5 sm:py-2.5 sm:text-4xl md:px-8 md:py-5 md:text-5xl">
            <h1>MY PROJECTS</h1>
          </div>
        </div>
        <p className="mt-8    text-xl ">
          From a blank HTML file to a full-stack TypeScript application — four projects, one journey.
        </p>
      </div>

      {/* Interactive journey — Client Component boundary */}
      <ProjectJourneyClient />
    </section>
  );
};

export default Projects;
