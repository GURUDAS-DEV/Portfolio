import HeroSection from "@/Components/HeroSection";
import ScrollNavbar from "@/Components/ScrollNavbar";
import CrackDivider from "@/Components/CrackDivider";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Education from "@/Components/Education";
import GetInTouch from "@/Components/GetInTouch";
import Footer from "@/Components/Footer";
import TopProgressBar from "@/Components/TopProgressBar";

export default function Home() {
  return (
    <>
      <ScrollNavbar />
      <TopProgressBar/>
      <div className="flex w-full transition-all duration-150 ease-in-out justify-center bg-gray-300 px-4 py-10">
        <div className="w-full max-w-[95%] ">
          <main className="home-overlay-shell border-4 border-black bg-white">
            <div className="home-overlay-back absolute inset-0" />
            <div className="home-overlay-front relative">
              <div className="w-full pt-32" id="Home">
                <HeroSection />
              </div>
              <CrackDivider />
              <div className="w-full pt-10 " id="About">
                <About />
              </div>
              <div className="w-full pt-10" id="Project">
                <Skills />
              </div>
              <div className="w-full pt-10" id="Skills">
                <Education />
              </div>
              <div className="w-full pt-10" id="GetInTouch">
                <GetInTouch />
              </div>
              <div className="w-full mb-2">
                <Footer />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
