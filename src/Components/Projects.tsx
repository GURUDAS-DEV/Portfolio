
import ProjectJourneyClient from "./ProjectJourneyClient";

// Server Component — layout & static markup only
const Projects = () => {
  return (
    <section
      id="projects"
      className="mx-auto w-full flex justify-center items-center flex-col px-6 py-12 md:px-7 lg:px-13"
    >
      {/* Section heading */}
      <div className="mb-16 w-full flex justify-center flex-col items-center font-space-grotesk">
        <div className="cta-overlay-shell  w-full">
          <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
          <div className="nav-cta  relative inline-flex justify-center w-full rounded-lg border-[3px] border-black bg-white py-5 text-3xl font-black leading-none text-black sm:px-5 sm:py-2.5 sm:text-4xl md:px-8 md:py-5 md:text-5xl">
            <h1>MY PROJECTS</h1>
          </div>
        </div>
        <p className="mt-8    text-xl text-black">
          From a blank HTML file to a full-stack TypeScript application — four projects, one journey.
        </p>
      </div>

      {/* Interactive journey — Client Component boundary */}
      <ProjectJourneyClient />
    </section>
  );
};

export default Projects;
