import HeroSection from "@/Components/HeroSection";
import ScrollNavbar from "@/Components/ScrollNavbar";
import CrackDivider from "@/Components/CrackDivider";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Education from "@/Components/Education";
import GetInTouch from "@/Components/GetInTouch";
import Footer from "@/Components/Footer";
import TopProgressBar from "@/Components/TopProgressBar";
import Projects from "@/Components/Projects";
import GithubContribution from "@/Components/GithubContribution";

export default function Home() {
  return (
    <>
      <TopProgressBar />
      <ScrollNavbar />
      <div className="flex w-full justify-center bg-gray-300 dark:bg-stone-600 px-2 py-8 transition-all duration-150 ease-in-out sm:px-4 sm:py-10 md:py-14">
        <div className="w-full max-w-[95%]">
          <main className="home-overlay-shell border-4 border-black bg-white dark:bg-black">
            <div className="home-overlay-back absolute inset-0" />
            <div className="home-overlay-front relative">
              <div className="w-full pt-24 sm:pt-28 md:pt-32" id="Home">
                <HeroSection />
              </div>
              <CrackDivider />
              <div className="w-full pt-12 sm:pt-14 md:pt-16" id="About">
                <About />
              </div>
              <div className="w-full pt-12 sm:pt-14 md:pt-16" id="Project">
                <Projects />
              </div>
              <div className="w-full pt-12 sm:pt-14 md:pt-16" id="Skills">
                <Skills />
              </div>
              <div className="w-full pt-12 sm:pt-14 md:pt-16" id="Github">
                <GithubContribution />
              </div>
              <div className="w-full pt-12 sm:pt-14 md:pt-16" id="Education">
                <Education />
              </div>
              <div className="w-full pt-12 sm:pt-14 md:pt-16" id="GetInTouch">
                <GetInTouch />
              </div>
              <div className="w-full mt-4 mb-3">
                <Footer />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
