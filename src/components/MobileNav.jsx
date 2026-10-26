import { Link, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import Socials from "./Socials";
import { navLinks } from "../util/navLinks";

const MobileNav = () => {
  const { pathname } = useLocation();

  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open menu"
        className="flex justify-center items-center p-2 -mr-2 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        <SheetDescription className="sr-only">Browse the pages of this portfolio</SheetDescription>

        {/* Logo */}
        <SheetClose asChild>
          <Link to="/" className="mt-14 mb-10 text-3xl font-semibold">
            Swapnil<span className="text-accent">.</span>
          </Link>
        </SheetClose>

        {/* Navigation links (menu closes after tapping a link) */}
        <nav aria-label="Mobile navigation" className="flex flex-col">
          {navLinks.map((link, index) => {
            const active = pathname === link.path;
            return (
              <SheetClose asChild key={link.path}>
                <Link
                  to={link.path}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between py-4 border-b border-white/10 text-xl transition-colors hover:text-accent ${
                    active ? "text-accent font-semibold" : "text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-sm text-white/30">{String(index + 1).padStart(2, "0")}</span>
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        {/* Footer: CTA + socials */}
        <div className="mt-auto flex flex-col gap-6 pb-4">
          <SheetClose asChild>
            <Button asChild className="w-full">
              <Link to="/contact">Hire me</Link>
            </Button>
          </SheetClose>
          <Socials
            containerStyles="flex justify-center gap-6"
            iconsStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;