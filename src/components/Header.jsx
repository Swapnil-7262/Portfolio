
import { Button } from "../components/ui/button";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" >
          <div className="flex justify-center items-center gap-2">
            <img className="w-12 md:w-20 xl:w-28  " src="/Images/logo.png" alt="logo.png" />
            <p className="text-4xl font-semibold capitalize cursor-pointer">Swapnil<span className="text-accent">.</span></p>
          </div>
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
