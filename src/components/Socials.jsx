import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Swapnil-7262" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/swapnil-chaudhari-613082266/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/swapnil_7262/?hl=en" },
  { icon: <FaTwitter />, path: "https://x.com/SwapnilCha69912" },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconsStyles}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
