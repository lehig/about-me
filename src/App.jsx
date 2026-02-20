import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { aboutParagraphs, contactLinks, projects } from "./data/content";

function Layout({ children }) {
  return (
    <div className="page-shell">
      <header className="hero">
        <p className="eyebrow">Portfolio</p>
        <h1>Lehi Gracia</h1>
        <p className="hero-copy">
          Junior Software Engineer | Go • AWS • React | Backend & Cloud-Focused | Ask about my latest project
        </p>
        <nav className="site-nav" aria-label="Primary">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="content-layout">{children}</main>
    </div>
  );
}

function HomePage() {
  return (
    <section id="about" className="card">
      <h2>About Me</h2>
      {aboutParagraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}

function ProjectsPage() {
  return (
    <section id="projects" className="card">
      <h2>Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.url}>
            <a href={project.url} target="_blank" rel="noreferrer">
              {project.title}
            </a>
            <span>{project.description}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ContactPage() {
  return (
    <section id="contact" className="card">
      <h2>Contact</h2>
      <p>If you want to discuss any project or opportunity, reach out here:</p>
      <ul className="contact-links">
        {contactLinks.map((contact) => (
          <li key={contact.label}>
            <a href={contact.url} target="_blank" rel="noreferrer">
              {contact.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
