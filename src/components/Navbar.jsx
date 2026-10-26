import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../util/navLinks";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav aria-label="Main navigation" className="flex items-center gap-9">
      {navLinks.map((link) => {
        const active = pathname === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            aria-current={active ? "page" : undefined}
            className={`group relative py-1 text-[15px] font-medium tracking-wide transition-colors duration-300 outline-none focus-visible:text-accent ${
              active ? "text-accent" : "text-white/80 hover:text-white"
            }`}
          >
            {link.name}
            <span
              aria-hidden="true"
              className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left rounded-full bg-accent transition-transform duration-300 ${
                active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;