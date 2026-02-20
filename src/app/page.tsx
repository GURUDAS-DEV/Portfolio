import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";
import CrackDivider from "@/Components/CrackDivider";
import About from "@/Components/About";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
    <div className="flex min-h-[screen] overflow-hidden w-full justify-center bg-gray-300 px-4 py-10">
      <div className="w-full max-w-[95%] ">
        <main className="home-overlay-shell border-4 border-black bg-white">
          <div className="home-overlay-back absolute inset-0" />
          <div className="home-overlay-front relative">
            <div className="w-full overflow-hidden">
              <Navbar />
            </div>
            <div className="w-full pt-10">
              <HeroSection />
            </div>
            <CrackDivider />
            <div className="w-full pt-10 ">
              <About />
            </div>
            <div className="w-full pt-10">
              <Skills />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
