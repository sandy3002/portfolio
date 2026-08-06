import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Rule from "./Rule";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub size={20} />,
    url: "https://github.com/sandy3002",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    url: "https://www.linkedin.com/in/sandipan-chatterjee-jgec/",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={20} />,
    url: "mailto:sandipan3002@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-paper text-muted py-12 border-t border-rule">
      <div className="container mx-auto px-4 max-w-5xl">
        <Rule className="mb-8 max-w-[6rem]" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="font-serif text-ink text-lg">Sandipan Chatterjee</p>
            <p className="font-mono text-xs tracking-[0.14em] uppercase mt-1">
              Colophon · {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
