import "../styles/hackathon.css"

export default function DesignathonLanding() {
  return (
    <div className="main-container">
      {/* Background gradients */}
      <div className="gradient-top-right" />
      <div className="gradient-bottom-left" />
      <div className="gradient-bottom-right" />

      {/* Header */}
          <div className="logo">
            <img src="../ux.png" alt="UX" className="ux-logo"/>
          </div>


      {/* Hero Section */}
      <div className="hero">


        <div className="hero-content">

          <div className="nav-links">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Our Team
            </a>
            <a href="#" className="nav-link">
              Events
            </a>
            <a href="#" className="nav-link active">
              Hackathon
            </a>
            <a href="/sponsors" className="nav-link">
              Sponsors
            </a>
            <a href="#" className="nav-link">
              Projects
            </a>
          </div>

          <div className="hero-text-container">
            <div className="hero-title">
                <p className="hero-title-text">Queen's UX Club</p>
                <p className="hero-text">Designathon 2025</p>
                <p className="hero-date">December 3rd-5th, 2025 | In Person | Kingston, ON</p>
            </div>


            <div className="hero-heading">
                <p className="hero-heading-text">Queen's University First Ever Design Hackathon</p>


            <div className="button-container">
                <a href="#" className="button-outline">
                    Apply to be a Volunteer
                </a>
            </div>

            </div>
          </div>
        </div>

      </div>

      {/* Content Sections */}
      <section className="content-section">
        <div className="content-container">
          {/* The Place for All Designers */}
          <div className="section">
            <div className="section-content">
              <h3 className="section-title">The Place for</h3>
              <h3 className="section-title-line">All Designers</h3>
              <p className="section-text">
                Our Designathon is a UI/UX-focused hackathon that challenges participants to solve real-world problems
                through creative design. Unlike traditional hackathons that emphasize coding, the Designathon puts user
                experience and interface design at the forefront. Over a set time period, teams will brainstorm,
                wireframe, and prototype innovative digital solutions based on a given theme or prompt. It's a great
                opportunity for beginners and experienced designers alike to showcase their skills, learn from mentors,
                and collaborate in a fast-paced, creative environment. Whether you're passionate about design or just
                getting started, the Designathon is a fun and impactful way to grow your skills and build your
                portfolio.
              </p>
            </div>
          </div>

          {/* Sponsor Section */}
          <div className="section">
            <h3 className="section-title-line">Sponsor the launch of design packed weekend</h3>
            <div className="section-content">
              <p className="section-text">
                Thanks to the generous support of our sponsors and partners, our Designathon is able to provide
                participants with a meaningful space to collaborate and grow. Their contributions power the creativity,
                innovation, and memorable moments that define our Designathon experience.
              </p>
              <a href="#" className="btn">
                Become a Sponsor
              </a>
            </div>

            {/* Sponsor Boxes - 1, 2, 3 layout */}
            <div className="sponsor-boxes">
              {/* First row - 1 box */}
              <div className="sponsor-row">
                <div className="sponsor-box sponsor-box-large"></div>
              </div>

              {/* Second row - 2 boxes */}
              <div className="sponsor-row sponsor-row-2">
                <div className="sponsor-box sponsor-box-medium"></div>
                <div className="sponsor-box sponsor-box-medium"></div>
              </div>

              {/* Third row - 3 boxes */}
              <div className="sponsor-row sponsor-row-3">
                <div className="sponsor-box sponsor-box-small"></div>
                <div className="sponsor-box sponsor-box-small"></div>
                <div className="sponsor-box sponsor-box-small"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
