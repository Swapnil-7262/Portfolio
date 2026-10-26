import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 -mx-4 -mt-4 px-4 text-white border-b transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#18181b]/80 backdrop-blur-md border-white/10 shadow-lg shadow-black/30"
          : "pt-12 pb-8 xl:pt-14 xl:pb-10 border-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" aria-label="Swapnil Chaudhari - Home" className="outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md">
          <div className="flex justify-center items-center gap-2">
            <img
              className={`transition-all duration-300 ${
                scrolled ? "w-10 md:w-12 xl:w-14" : "w-12 md:w-20 xl:w-28"
              }`}
              src="/Images/logo.png"
              alt="Swapnil Chaudhari logo"
            />
            <p
              className={`font-semibold capitalize transition-all duration-300 ${
                scrolled ? "text-2xl xl:text-3xl" : "text-4xl"
              }`}
            >
              Swapnil<span className="text-accent">.</span>
            </p>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-10">
          <Navbar />
          <Button asChild>
            <Link to="/contact">Hire me</Link>
          </Button>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;