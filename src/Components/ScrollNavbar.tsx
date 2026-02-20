"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Moon } from "lucide-react";
import Link from "next/link";

const ScrollNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full px-3 py-3 transition-transform duration-300 ease-in-out sm:px-5 sm:py-4 md:px-8 md:py-5 lg:px-12 lg:py-6 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="nav-overlay-shell mx-auto w-full max-w-375">
        <div className="nav-overlay-back absolute inset-0 border-4 border-black bg-black" />

        <div className="nav-overlay-front relative border-4 border-black bg-[#ffd93d] px-3 py-2 font-space-grotesk font-light text-black sm:px-4 sm:py-3 md:px-5 lg:px-6">
          <nav className="navbar flex w-full items-center justify-between gap-3">
            <div className="gb-overlay-shell">
              <div className="gb-overlay-back absolute inset-0 rounded-lg border-4 border-black bg-black" />
              <Link
                href="#"
                className="nav-brand gb-overlay-front relative flex rounded-lg border-4 border-black bg-[#66dff4] px-3 py-1.5 text-xl font-black leading-none tracking-tight sm:px-4 sm:py-2 sm:text-2xl lg:text-[28px]"
              >
                GB
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="cta-overlay-shell lg:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
              <span className="nav-cta cta-overlay-front relative flex rounded-lg border-[3px] border-black bg-[#67d6ea] p-2 leading-none">
                {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </span>
            </button>

            <div className="nav-right hidden items-center gap-5 text-base font-medium lg:flex lg:text-[18px]">
              <Link
                href="#Home"
                className="nav-link transition-opacity hover:opacity-90"
              >
                Home
              </Link>
              <Link
                href="#About"
                className="nav-link transition-opacity hover:opacity-90"
              >
                About
              </Link>
              <Link
                href="#Projects"
                className="nav-link transition-opacity hover:opacity-90"
              >
                Projects
              </Link>
              <Link
                href="#Skills"
                className="nav-link transition-opacity hover:opacity-90"
              >
                Skills
              </Link>

              <div className="cta-overlay-shell">
                <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
                <Link
                  href="#GetInTouch"
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

          {isMenuOpen && (
            <div className="mt-3 flex flex-col gap-2 border-t-4 border-black pt-3 lg:hidden">
              <Link href="#Home" className="px-2 py-1 text-base font-semibold" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="#About" className="px-2 py-1 text-base font-semibold" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="#Projects" className="px-2 py-1 text-base font-semibold" onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
              <Link href="#Skills" className="px-2 py-1 text-base font-semibold" onClick={() => setIsMenuOpen(false)}>
                Skills
              </Link>
              <Link
                href="#GetInTouch"
                className="mt-1 w-fit rounded-lg border-[3px] border-black bg-[#67d6ea] px-4 py-2 text-sm font-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in Touch!
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScrollNavbar;
