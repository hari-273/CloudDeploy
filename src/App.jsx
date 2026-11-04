import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>CloudDeploy</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#tech">Tech Stack</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <h1>CloudDeploy</h1>
        <p>
          Automated CI/CD Pipeline using GitHub Actions, Docker & AWS EC2
        </p>

        <button>Live Deployment</button>
      </header>

      <section id="about" className="section">
        <h2>About Project</h2>

        <p>
          CloudDeploy demonstrates a complete DevOps workflow where every code
          push automatically triggers a CI/CD pipeline. The application is
          built, containerized with Docker, pushed to Docker Hub, and deployed
          to an AWS EC2 server using GitHub Actions.
        </p>
      </section>

      <section id="tech" className="section">
        <h2>Technology Stack</h2>

        <div className="cards">
          <div className="card">
            <h3>Frontend</h3>
            <p>React + Vite</p>
          </div>

          <div className="card">
            <h3>Version Control</h3>
            <p>Git & GitHub</p>
          </div>

          <div className="card">
            <h3>Containerization</h3>
            <p>Docker</p>
          </div>

          <div className="card">
            <h3>CI/CD</h3>
            <p>GitHub Actions</p>
          </div>

          <div className="card">
            <h3>Cloud</h3>
            <p>AWS EC2 Ubuntu</p>
          </div>

          <div className="card">
            <h3>Deployment</h3>
            <p>Docker Container</p>
          </div>
        </div>
      </section>

      <section id="pipeline" className="section">
        <h2>Deployment Workflow</h2>

        <div className="pipeline">
          <span>Git Push</span>
          <span>→</span>
          <span>GitHub</span>
          <span>→</span>
          <span>GitHub Actions</span>
          <span>→</span>
          <span>Docker Build</span>
          <span>→</span>
          <span>Docker Hub</span>
          <span>→</span>
          <span>AWS EC2</span>
        </div>
      </section>

      <section className="section">
        <h2>Project Features</h2>

        <ul className="features">
          <li>Automatic Build</li>
          <li>Continuous Integration</li>
          <li>Dockerized Application</li>
          <li>GitHub Actions Workflow</li>
          <li>Automatic Deployment</li>
          <li>AWS EC2 Hosting</li>
        </ul>
      </section>

      <footer id="contact">
        <h3>CloudDeploy</h3>
        <p>Built by Hari Prasath</p>
      </footer>
    </>
  );
}

export default App;