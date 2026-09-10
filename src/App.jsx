import { useEffect, useState } from "react";
import githubIcon from "../assets/icons/github.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

const currentWork = [
  "connecting data owners with ai teams",
  "writing about data, human expertise, and how models learn",
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
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="ball-shell" cx="16" cy="16" r="14" />
      <g className="ball-stitching">
        <path d="m16 8.3-4.4 3.2 1.7 5.2h5.4l1.7-5.2L16 8.3Z" />
        <path d="m16 8.3-3.7-4.8M20.4 11.5l5.6-2M18.7 16.7l3.5 4.8M13.3 16.7l-3.5 4.8M11.6 11.5 6 9.5" />
        <path d="m12.3 3.5-4.7.9L6 9.5l3.8 2.8M26 9.5l-1.6-5.1-4.7-.9-3.7 4.8M22.2 21.5l4.7.1 2-4.5-2.9-7.6M9.8 21.5l-4.7.1-2-4.5L6 9.5M22.2 21.5l-1.6 5.4M9.8 21.5l1.6 5.4" />
      </g>
      <g className="ball-panels">
        <path d="m16 8.3-4.4 3.2 1.7 5.2h5.4l1.7-5.2L16 8.3Z" />
        <path d="M12.3 3.5A14 14 0 0 1 19.7 3.5L16 8.3l-3.7-4.8Z" />
        <path d="M26 9.5a14 14 0 0 1 2.9 7.6l-4.5-1.4-2.2-4.6L26 9.5Z" />
        <path d="m26.9 21.6-4.7-.1-3.1 4.1 1.5 1.3a14 14 0 0 0 6.3-5.3Z" />
        <path d="m5.1 21.6 4.7-.1 3.1 4.1-1.5 1.3a14 14 0 0 1-6.3-5.3Z" />
        <path d="M6 9.5a14 14 0 0 0-2.9 7.6l4.5-1.4 2.2-4.6L6 9.5Z" />
      </g>
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
        <span>player, drone pilot, linguaphile, and omnist.</span>
      </p>

      <section className="bio-section" aria-label="Bio">
        <p>
          i broker data for ai and write about what makes it valuable. i'm
          interested in the knowledge that exists in the world but hasn't made
          it into a model.
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
