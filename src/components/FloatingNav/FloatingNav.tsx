import Link from "next/link";
import { Icons } from "@/components/icons";
import {
  Award,
  BriefcaseBusiness,
  Code2,
  Home,
  Mail,
  NotebookIcon,
  PanelsTopLeft,
} from "lucide-react";

const items = [
  { href: "#top", label: "Home", icon: Home },
  { href: "#work", label: "Projects", icon: PanelsTopLeft },
  { href: "#skills", label: "Skills", icon: Code2 },
  { href: "#experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "#awards", label: "Awards", icon: Award },
  { href: "#contact", label: "Contact", icon: Mail },
];

const externalItems = [
  {
    href: "https://github.com/saidiadem",
    label: "GitHub",
    icon: Icons.github,
  },
  {
    href: "https://linkedin.com/in/adem-saidi-040399280/",
    label: "LinkedIn",
    icon: Icons.linkedin,
  },
  {
    href: "https://cdn.jsdelivr.net/gh/saidiadem/saidiadem.github.io@portfolio-media/media/adem-saidi-resume.pdf",
    label: "Résumé",
    icon: NotebookIcon,
  },
];

export default function FloatingNav() {
  return (
    <nav className="floating-nav" aria-label="Section navigation">
      <span className="floating-nav-brand" aria-hidden="true">
        AS<span>.</span>
      </span>
      <span className="floating-nav-divider" aria-hidden="true" />
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            href={item.href}
            key={item.href}
            className="floating-nav-link"
            aria-label={item.label}
            data-label={item.label}
          >
            <Icon />
          </Link>
        );
      })}
      <span className="floating-nav-divider floating-nav-external-divider" aria-hidden="true" />
      {externalItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            href={item.href}
            key={item.label}
            className="floating-nav-link floating-nav-external"
            aria-label={item.label}
            data-label={item.label}
            target="_blank"
            rel="noreferrer"
          >
            <Icon />
          </a>
        );
      })}
    </nav>
  );
}
