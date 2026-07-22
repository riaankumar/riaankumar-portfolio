import { useEffect, useState } from "react";
import githubIcon from "../assets/icons/github.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

const currentWork = [
  "building kritikos",
  "researching multimodal learning agents for enterprises",
  "founding gtm engineer @ memorang",
  "studying data science + economics @ uc berkeley",
];

const previousWork = [
  "gtm advisor and lead - various startups",
  "campus strategist - perplexity, tools for humanity, and opennote",
  "ai + edtech diligence @ thuraya fund",
  "investment research @ kaizenvest + kpmg",
  "built moonshot mentors, acquired",
];

const projects = [
  {
    label: "kritikos",
    href: "https://usekritikos.com",
    detail: "ai data layer for k-12 schools",
  },
  "district outreach copilot - cited district outreach drafts",
  "family office report mvp - ledger + reconciliation queue",
  "moonshot mentors - entrepreneurship mentoring, acquired",
];

const projectExperience = [
  "founding gtm engineer @ memorang",
  "gtm advisor and lead - various startups",
  "campus strategist - perplexity, tools for humanity, and opennote",
  "ai + edtech diligence @ thuraya fund",
  "investment research @ kaizenvest + kpmg",
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/riaankumar/",
    icon: linkedinIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/riaankumar",
    icon: githubIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_riaankumar/",
    icon: instagramIcon,
  },
];

function getRoute() {
  return window.location.hash === "#/projects" ? "projects" : "home";
}

function useHashRoute() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("hashchange", handleRouteChange);
    return () => window.removeEventListener("hashchange", handleRouteChange);
  }, []);

  return route;
}

function FootballIcon() {
  return (
    <svg
      className="personal-ball"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="9.25" />
      <path d="m12 7 3.2 2.3-1.2 3.8h-4l-1.2-3.8L12 7Z" />
      <path d="m12 7 .2-4.2M15.2 9.3l4-1.2M14 13.1l2.6 3.4M10 13.1l-2.6 3.4M8.8 9.3l-4-1.2M16.6 16.5l.8 3.5M7.4 16.5 6.6 20" />
    </svg>
  );
}

function SectionList({ id, title, items, home = false }) {
  return (
    <section
      className={`list-section${home ? " home-list" : ""}`}
      aria-labelledby={id}
    >
      <h2 id={id}>{title}:</h2>
      <ul>
        {items.map((item) => {
          const key = typeof item === "string" ? item : item.label;

          return (
            <li key={key}>
              {typeof item === "string" ? (
                item
              ) : (
                <>
                  <a href={item.href}>{item.label}</a> - {item.detail}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-block" aria-label="Contact">
      <a className="email-link" href="mailto:riaankumar@berkeley.edu">
        riaankumar@berkeley.edu
      </a>
      <div className="social-row" aria-label="Social links">
        {socialLinks.map(({ label, href, icon }) => (
          <a key={label} href={href} aria-label={label}>
            <img src={icon} alt="" />
          </a>
        ))}
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <main id="main" className="mono-page">
      <h1>riaan kumar</h1>
      <p className="one-line personal-line">
        <FootballIcon />
        <span>
          player, drone pilot, linguaphile, omnist, and poker degen ;)
        </span>
      </p>

      <section className="bio-section" aria-label="Bio">
        <p>
          i like turning messy workflows into useful products, visions, and
          go-to-market strategies for teams and individuals.
        </p>
      </section>

      <SectionList id="current-title" title="currently" items={currentWork} home />
      <SectionList id="previous-title" title="previously" items={previousWork} home />

      <nav className="plain-links" aria-label="Pages">
        <a href="#/projects">my projects -&gt;</a>
      </nav>

      <Contact />
    </main>
  );
}

function ProjectsPage() {
  return (
    <main id="main" className="mono-page">
      <h1>projects</h1>

      <SectionList id="work-title" title="work" items={projects} />
      <SectionList
        id="experience-title"
        title="previously"
        items={projectExperience}
      />

      <nav className="plain-links" aria-label="Pages">
        <a href="#/">home -&gt;</a>
      </nav>
    </main>
  );
}

export default function App() {
  const route = useHashRoute();

  useEffect(() => {
    document.title = route === "projects" ? "Projects - Riaan Kumar" : "Riaan Kumar";
  }, [route]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {route === "projects" ? <ProjectsPage /> : <HomePage />}
    </>
  );
}
