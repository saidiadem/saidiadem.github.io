import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Adem Saidi",
  initials: "AS",
  url: "https://saidiadem.github.io",
  location: "Tunis, Tunisia",
  locationLink: "https://www.google.com/maps/place/Tunis",
  description:
    "Lead AI Engineer building reliable agent infrastructure, retrieval systems, and applied machine learning products.",
  summary:
    "Lead AI Engineer and software engineering student at INSAT, working across agent reliability, RAG, multimodal search, and applied ML.",
  avatarUrl: "https://avatars.githubusercontent.com/u/130775749?v=4",
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "adem.saidi@insat.ucar.tn",
    tel: "+21653531995",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saidiadem",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/adem-saidi-040399280/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:adem.saidi@insat.ucar.tn",
        icon: Icons.email,
        navbar: true,
      },
      resume: {
        name: "Resume",
        url: "https://cdn.jsdelivr.net/gh/saidiadem/saidiadem.github.io@portfolio-media/media/adem-saidi-resume.pdf",
        icon: NotebookIcon,
        navbar: true,
      },
    },
  },
} as const;
