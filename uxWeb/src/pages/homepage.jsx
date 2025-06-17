import "../styles/homepage.css"

export default function Home() {
    return (
      <div className="page-container">
        <div className="red-radial-circle"></div>
        <div className="blue-radial-circle"></div>
        <div className="dot-grid-1">
            <img src="../Dot Grid.svg" alt="Dot Grid"/>
        </div>
        <div className="dot-grid-2">
            <img src="../Dot Grid-cropped.svg" alt="Dot Grid"/>
        </div>
            
        
        {/* Navigation */}
        <header>
        <div href="/" className="logo">
            <img src="../ux.png" alt="UX" className="ux-logo"/>
        </div>  
        </header>
  
        
          {/* Decorative elements */}
  
          <div className="hero-content">
            {/* Hero Section */}
        <div className="hero-section">
          {/* Navigation */}
            <div className="nav-links">
              <a href="/" className="nav-link active">
                Home
              </a>
              <a href="/our-team" className="nav-link">
                Our Team
              </a>
              <a href="/events" className="nav-link">
                Events
              </a>
              <a href="/hackathon" className="nav-link-hackathon">
                Hackathon
              </a>
              <a href="/sponsors" className="nav-link">
                Sponsors
              </a>
              <a href="/projects" className="nav-link">
                Projects
              </a>
            </div>


            <div className="hero-text-container">
            <h1 className="hero-title">
              The Premier Club For
              <div>
                <span className="text-grad">Product Design</span>
              </div>
            </h1>
            <div className="hero-desc-container">
            <p className="hero-desc-text">
              We are Queen's UX, a group of talented students from <br/> Queen's University who are passionate about product
              design <br/> and every thing revolving around improving user interfaces.
            </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Sponsors */}
        <section className="sponsors-section">
          <div className="sponsors-container">
            <h2 className="sponsors-title">Become a Sponsor</h2>
            <p className="sponsors-desc">Help us create a community tor aesigners at Queen's University<br/>
            Click the button below for inquires about partnerships with us</p>
          </div>
          <div className="sponsors-button-container">
            <a href="/sponsors" className="sponsors-button-outline">
              Sponsor Queen's UX Club
            </a>
          </div>
        </section>
  
        {/* Values Section */}
        <section className="values-section">
          {/* Decorative stars */}
          <div className="star yellow-star"></div>
          <div className="star red-star"></div>
          <div className="star green-star"></div>
  
          <div className="values-heading">
            <h2>
              We strive to <h2 className="text-y-b">build</h2>, 
              <h2 className="text-r-g"> design</h2>
              , and <h2 className="text-b-y"> teach </h2> with our community
            </h2>
          </div>
  
          <div className="values-card-section">
            <div className="value-card">
              <div className="value-number">01</div>
              <div className="value-circle yellow-green-gradient"></div>
              <h3 className="value-title">BUILD</h3>
              <div className="card-bg"> </div>
            </div>
  
            <div className="value-card">
              <div className="value-number">02</div>
              <div className="value-circle blue-red-gradient"></div>
              <h3 className="value-title">DESIGN</h3>
              <div className="card-bg"> </div>
            </div>
  
            <div className="value-card">
              <div className="value-number">03</div>
              <div className="value-circle orange-red-gradient"></div>
              <h3 className="value-title">TEACH</h3>
              <div className="card-bg"> </div>
            </div>
          </div>
  
          <div className="team-button-container">
            <a href="/team" className="button-outline">
              Meet our Team
            </a>
          </div>
        </section>
  
        {/* Join Section */}
        <section className="join-section">
          {/* Dot pattern */}
          <div className="join-container">
            <div className="join-content">
              <h2 className="join-title">
                Join
                <br />
                Today!
              </h2>
              <div className="join-button-container">
                <a href="/join" className="button-outline">
                  Become a UXpert
                </a>
              </div>
            </div>
  
            <div className="shapes-container">
              <img src="../Group 7.svg" alt="Group 7"/>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="main-footer">
          <div className="social-link">
            <a href="https://instagram.com/queensux" className="instagram-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="instagram-icon"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@queensux</span>
            </a>
          </div>
        </footer>
      </div>
    )
  }
  