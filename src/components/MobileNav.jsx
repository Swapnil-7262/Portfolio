import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet"; // adjust this path as needed

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "project", path: "/project" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl cursor-pointer" onClick={() => navigate("/")}>
          <h1 className="text-4xl font-semibold">
            Swapnil <span className="text-accent">.</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <button
              key={index}
              onClick={() => navigate(link.path)}
              className={`capitalize hover:text-accent transition-all text-xl ${
                pathname === link.path ? "text-accent font-semibold" : ""
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
