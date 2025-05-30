import React from "react";
import { Button } from "../components/ui/button";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-4xl font-semibold capitalize cursor-pointer">
          Swapnil<span className="text-accent">.</span>
        </a>

        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link to="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
