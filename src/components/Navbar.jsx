import { Link, useLocation, useNavigate } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Project", path: "/project" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          to={link.path}
          key={index}
          className={`${
            pathname === link.path
              ? "text-accent border-b-2 border-accent"
              : "text-white"
          } font-medium capitalize hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
