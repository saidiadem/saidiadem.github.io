import Image from "next/image";
import Link from "next/link";
import MatterBox from "@/components/DraggableSkills/MatterBox";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const MEDIA_URL =
  "https://cdn.jsdelivr.net/gh/saidiadem/saidiadem.github.io@portfolio-media/media";
const RESUME_URL = `${MEDIA_URL}/adem-saidi-resume.pdf`;

const projects = [
  {
    title: "Gommage",
    eyebrow: "3rd place · AINS Hackathon 2026",
    description:
      "Infrastructure for reproducing agent failures without repeating their side effects. Gommage records LLM and tool trajectories as Agent Execution Records, then replays them step by step with safe mocks, editable divergence points, and Jira-native inspection.",
    impact: "Deterministic replay for non-deterministic agents",
    stack: ["Python", "Agent replay", "Jira Forge", "React", "AER"],
    image: `${MEDIA_URL}/gommage-trace.png`,
    video: `${MEDIA_URL}/gommage-demo.mp4`,
    imageAlt: "Gommage trace inspector showing an agent execution timeline and replay graph",
    href: "https://github.com/Ala-ADN/gommage",
    accent: "violet",
  },
  {
    title: "Cochleogram AST",
    eyebrow: "Respiratory sound research · ICBHI 2017",
    description:
      "An abnormal respiratory-sound classifier that turns lung audio into biologically inspired cochleograms. I compared ViT and Audio Spectrogram Transformer variants across patient-stratified folds and improved the best pipeline with SAM and threshold tuning.",
    impact: "71.3% mean tuned ICBHI score",
    stack: ["PyTorch", "AST", "SAM", "Audio ML", "Cross-validation"],
    image: `${MEDIA_URL}/cochleogram-both.png`,
    video: null,
    imageAlt: "Cochleogram visualization of a respiratory cycle containing crackles and wheezes",
    href: "https://github.com/saidiadem/cochleogram-vit",
    accent: "cyan",
  },
  {
    title: "Relib",
    eyebrow: "Winner · Unbreaking News 2.0",
    description:
      "A cross-lingual platform for surfacing colonial bias in Wikipedia. Relib combines knowledge graphs and NLP to score source provenance, loaded language, agency, and actor representation instead of reducing bias to a single opaque label.",
    impact: "1st place hackathon project",
    stack: ["Python", "NLP", "Knowledge graphs", "Cross-lingual AI"],
    image: `${MEDIA_URL}/relib-poster.jpg`,
    video: `${MEDIA_URL}/relib-demo.mp4`,
    imageAlt: "Relib colonial bias analysis platform demonstration",
    href: "https://github.com/saidiadem/relib",
    accent: "amber",
  },
  {
    title: "Klippy",
    eyebrow: "AI Minds Hackathon 2026",
    description:
      "A local-first multimodal research assistant for text, images, and audio. A Qdrant retrieval layer and Neo4j knowledge graph precompute grounded context so small local models can answer with traceable sources.",
    impact: "Private, multimodal RAG on local hardware",
    stack: ["FastAPI", "Electron", "Qdrant", "Neo4j", "Ollama"],
    image: `${MEDIA_URL}/klippy-poster.jpg`,
    video: `${MEDIA_URL}/klippy-demo.mp4`,
    imageAlt: "Klippy local multimodal assistant demonstration",
    href: "https://github.com/Rayen-Hamza/AI-Minds-Hackathon",
    accent: "rose",
  },
];

const experience = [
  {
    role: "Lead AI Engineer",
    company: "RémAI",
    period: "Jan 2026 - Present",
    location: "Remote · Canada",
    description:
      "Leading delivery of production conversational AI systems, technical infrastructure, incident response, and engineering sprints across a growing client portfolio.",
    metrics: ["$19k+ client revenue in 21 days", "11.4k+ end users", "0 → 4 paying clients"],
    highlights: [
      "Rebuilt delivery infrastructure around containerized deployments, automated CI/CD, monitoring, and production incident response.",
      "Led interns, client demos, proof-of-concepts, and engineering sprints from initial architecture through live operations.",
      "Introduced Qdrant-backed product retrieval for lower-latency and multimodal catalog search.",
    ],
    stack: ["Python", "FastAPI", "Qdrant", "Postgres", "Docker", "CI/CD"],
    note: "NDA protected, outcomes only",
  },
  {
    role: "AI Engineer",
    company: "Mindbay Technologies",
    period: "Nov 2024 - Dec 2025",
    location: "Remote · United Kingdom",
    description:
      "Built RAG and LLM response systems for an AI mental-health platform, then extended the product into personalized engagement and AI-driven end-to-end testing.",
    metrics: ["50%+ Session 1 conversion lift", "50%+ faster testing cycles"],
    highlights: [
      "Engineered retrieval pipelines and optimized LLM response frameworks for a user-facing mental-health product.",
      "Built personalized notification and engagement workflows with Customer.io.",
      "Automated end-to-end product testing with an AI-driven evaluation system.",
    ],
    stack: ["Python", "FastAPI", "Milvus", "Postgres", "Customer.io", "RAG"],
    note: null,
  },
];

const internships = [
  {
    company: "ImageIn Esprit",
    role: "Software & AI Engineer Intern",
    period: "Jun - Aug 2024",
    detail: "Career and job recommendation system with Python, TensorFlow, and Flask.",
  },
  {
    company: "Junior Entreprise INSAT",
    role: "Software Developer Intern",
    period: "Aug 2024",
    detail: "NestJS HR backend with scheduling and secure QR-based attendance.",
  },
  {
    company: "Billcom",
    role: "Web Developer Intern",
    period: "Aug 2023",
    detail: "Spring Boot and MySQL client-management dashboard for telecom operations.",
  },
];

const additionalWork = [
  {
    name: "DrugZello",
    type: "Graph ML · XAI",
    detail: "Molecular solubility prediction across 75 solvents, with dual-channel explanations and a 12% accuracy lift over regression baselines.",
  },
  {
    name: "Data Dangereuse",
    type: "3rd place · DataQuest",
    detail: "Explainable XGBoost insurance recommendations in a mobile workflow with FastAPI, Expo, and OCR.",
  },
  {
    name: "DEBIAS",
    type: "Fair recommendations",
    detail: "Semantic product discovery with CLIP, Qdrant, Neo4j, and fairness-aware ranking to reduce exposure bias.",
  },
];

function SectionHeading({ kicker, children, description }: { kicker: string; children: React.ReactNode; description?: string }) {
  return (
    <div className="section-heading">
      <p className="kicker">{kicker}</p>
      <div>
        <h2>{children}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header shell">
        <Link className="wordmark" href="#top" aria-label="Back to top">
          AS<span>.</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="#work">Work</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#awards">Awards</Link>
          <a className="header-cta" href={RESUME_URL} target="_blank" rel="noreferrer">
            Résumé <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="availability"><span /> Lead AI Engineer · Tunis, Tunisia</div>
        <p className="hero-kicker">I build AI systems that survive contact with production.</p>
        <h1>Adem Saidi</h1>
        <p className="hero-copy">
          Software engineer working across <strong>agent infrastructure</strong>, <strong>retrieval systems</strong>, and <strong>applied machine learning</strong>, from revenue-generating conversational AI to award-winning developer tools.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:adem.saidi@insat.ucar.tn">
            <Mail size={17} /> Let&apos;s talk
          </a>
          <a className="button button-secondary" href="https://github.com/saidiadem" target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub
          </a>
          <a className="button button-secondary" href="https://linkedin.com/in/adem-saidi-040399280/" target="_blank" rel="noreferrer">
            <Linkedin size={17} /> LinkedIn
          </a>
        </div>
        <div className="signal-grid">
          <div><strong>3×</strong><span>hackathon podiums</span></div>
          <div><strong>11.4k+</strong><span>end users served</span></div>
          <div><strong>50%+</strong><span>conversion lift shipped</span></div>
          <div><strong>2027</strong><span>INSAT software engineering</span></div>
        </div>
      </section>

      <section className="section shell" id="work">
        <p className="code-tag" aria-hidden="true">&lt;Projects&gt;</p>
        <SectionHeading kicker="01 / Selected work" description="Systems chosen for technical depth, measurable outcomes, and a story worth telling.">
          Work that goes beyond the demo.
        </SectionHeading>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`project-card accent-${project.accent}`} key={project.title}>
              <a className="project-media" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`}>
                {project.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={project.image}
                    aria-label={project.imageAlt}
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : (
                  <Image src={project.image} alt={project.imageAlt} width={1440} height={980} unoptimized />
                )}
                <span className="project-number">0{index + 1}</span>
              </a>
              <div className="project-content">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source`}><ArrowUpRight /></a>
                </div>
                <p className="project-description">{project.description}</p>
                <p className="project-impact"><Sparkles size={15} /> {project.impact}</p>
                <div className="tag-list">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="code-tag code-tag-close" aria-hidden="true">&lt;/Projects&gt;</p>
      </section>

      <section className="section shell skills-section" id="skills">
        <p className="code-tag" aria-hidden="true">&lt;Skills&gt;</p>
        <SectionHeading kicker="02 / Skills" description="Grab a technology and throw it around. Yes, the icons have physics.">
          The toolbox, but make it draggable.
        </SectionHeading>
        <div className="skills-playground">
          <div className="skills-caption">
            <Code2 />
            <div>
              <strong>Drag, drop, collide.</strong>
              <span>Python, React, FastAPI, databases, infrastructure, and the tools around them.</span>
            </div>
          </div>
          <MatterBox />
        </div>
        <p className="code-tag code-tag-close" aria-hidden="true">&lt;/Skills&gt;</p>
      </section>

      <section className="section shell" id="experience">
        <p className="code-tag" aria-hidden="true">&lt;Experience&gt;</p>
        <SectionHeading kicker="03 / Experience" description="Product engineering, ML systems, and the operational work required to keep them useful.">
          From model output to business outcome.
        </SectionHeading>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.company}>
              <div className="experience-meta">
                <p>{item.period}</p>
                <span><MapPin size={13} /> {item.location}</span>
              </div>
              <div className="experience-body">
                <div className="experience-title"><h3>{item.role}</h3><span>@ {item.company}</span></div>
                <p>{item.description}</p>
                <div className="metric-list">{item.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
                <ul className="experience-highlights">
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <div className="tag-list experience-stack">
                  {item.stack.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                {item.note && <p className="nda-note"><ShieldCheck size={15} /> {item.note}</p>}
              </div>
            </article>
          ))}
        </div>

        <div className="internship-panel">
          <div className="panel-intro">
            <BriefcaseBusiness />
            <div><p className="kicker">Earlier chapters</p><h3>Engineering internships</h3></div>
          </div>
          <div className="internship-list">
            {internships.map((item) => (
              <div className="internship-item" key={item.company}>
                <span>{item.period}</span>
                <div><h4>{item.role}</h4><p className="company">{item.company}</p><p>{item.detail}</p></div>
              </div>
            ))}
          </div>
        </div>
        <p className="code-tag code-tag-close" aria-hidden="true">&lt;/Experience&gt;</p>
      </section>

      <section className="section shell" id="awards">
        <p className="code-tag" aria-hidden="true">&lt;Awards&gt;</p>
        <SectionHeading kicker="04 / More work & recognition">
          Breadth, without the project graveyard.
        </SectionHeading>
        <div className="recognition-grid">
          <div className="award-card featured-award">
            <Award />
            <p>Winner · Nov 2025</p>
            <h3>Unbreaking News 2.0</h3>
            <span>Relib · Colonial bias analysis</span>
          </div>
          <div className="award-card">
            <Award />
            <p>3rd place · Jun 2026</p>
            <h3>AINS Hackathon</h3>
            <span>Gommage · Agent observability & replay</span>
          </div>
          <div className="award-card">
            <Award />
            <p>3rd place · 2026</p>
            <h3>DataQuest</h3>
            <span>Olea · Explainable insurance recommendations</span>
          </div>
        </div>
        <div className="additional-list">
          {additionalWork.map((item) => (
            <article key={item.name}>
              <Code2 />
              <div><div><h3>{item.name}</h3><span>{item.type}</span></div><p>{item.detail}</p></div>
            </article>
          ))}
        </div>
        <p className="code-tag code-tag-close" aria-hidden="true">&lt;/Awards&gt;</p>
      </section>

      <section className="section shell contact-section">
        <p className="code-tag" aria-hidden="true">&lt;Contact&gt;</p>
        <p className="kicker">05 / Contact</p>
        <h2>Have a hard AI problem?<br /><span>I&apos;d like to hear it.</span></h2>
        <p>I&apos;m especially interested in agent reliability, retrieval-heavy products, and applied ML systems with real users.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:adem.saidi@insat.ucar.tn"><Mail size={17} /> adem.saidi@insat.ucar.tn</a>
          <a className="button button-secondary" href={RESUME_URL} target="_blank" rel="noreferrer">View résumé <ArrowUpRight size={16} /></a>
        </div>
        <p className="code-tag code-tag-close" aria-hidden="true">&lt;/Contact&gt;</p>
      </section>

      <footer className="shell">
        <span>© 2026 Adem Saidi</span>
        <span>Designed and built in Tunis.</span>
      </footer>
    </main>
  );
}
