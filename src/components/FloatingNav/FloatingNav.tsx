import Link from "next/link";
import {
  Award,
  BriefcaseBusiness,
  Code2,
  Home,
  Mail,
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
    </nav>
  );
}
