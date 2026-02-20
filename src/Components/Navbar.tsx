import { Moon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="z-50 w-full px-12 py-6">
      <div className="nav-overlay-shell mx-auto w-full max-w-430">
        <div className="nav-overlay-back absolute inset-0 border-4 border-black bg-black" />

        <div className="nav-overlay-front relative border-4 border-black bg-[#ffd93d] px-6 py-3 font-space-grotesk text-black font-light">
          <nav className="navbar flex w-full items-center justify-between">
            <div className="gb-overlay-shell">
              <div className="gb-overlay-back absolute inset-0 rounded-lg border-4 border-black bg-black" />
              <Link
                href="#"
                className="nav-brand gb-overlay-front relative flex rounded-lg border-4 border-black bg-[#66dff4] px-4 py-2 text-[28px] font-black leading-none tracking-tight"
              >
                GB
              </Link>
            </div>

            <div className="nav-right flex items-center gap-6 text-[18px] font-medium">
              <Link href="#hero" className="nav-link transition-opacity hover:opacity-90">
                Home
              </Link>
              <Link href="#about" className="nav-link transition-opacity hover:opacity-90">
                About
              </Link>
              <Link href="#experience" className="nav-link transition-opacity hover:opacity-90">
                Journey
              </Link>
              <Link href="#skills" className="nav-link transition-opacity hover:opacity-90">
                Skills
              </Link>

              <div className="cta-overlay-shell">
                <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
                <Link
                  href="#contact"
                  className="nav-cta cta-overlay-front relative flex rounded-lg border-[3px] border-black bg-[#67d6ea] px-5 py-3 text-sm font-black leading-none"
                >
                  Get in Touch!
                </Link>
              </div>

              <div className="cta-overlay-shell">
                <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
              <button
                id="theme-toggle"
                className="nav-cta cta-overlay-front cursor-pointer theme-toggle-nav rounded-lg border-[3px] border-black bg-[#67d6ea] p-2.5 leading-none"
                aria-label="Toggle theme"
                type="button"
              >
                <Moon size={20} />
              </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
