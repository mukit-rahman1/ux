import "../styles/homepage/globals.css"
import "../styles/homepage/header.css"
import "../styles/homepage/hero.css"
import "../styles/homepage/vision.css"
import "../styles/homepage/values.css"
import "../styles/homepage/events.css"
import "../styles/homepage/footer.css"
import { ArrowUpRight, Mail, Instagram, Linkedin } from "lucide-react"

export default function homepage() {
  return (
    <div>
      {/* Header */}
        <div className="navbar-home">

            <div className="logo w-[60px] h-[46px]">
              <img src="../Logo.svg" alt="UX" className="ux-logo"/>
            </div>
            <div className="nav-links">
              <a href="/team">Our Team</a>
              <a href="/events">Events</a>
              <a href="/hackathon">Hackathon</a>
              <a href="/sponsorship">Sponsorship</a>
              <a href="/projects">Projects</a>
            </div>
            <a href="#" className="contact-btn">
              Contact
            </a>
        </div>


      {/* Hero Section */}
      <section className="hero">
        {/* Decorative Stars */}
       
        {/* Hero Content */}
        <div className="container">
          <div className="hero-content">
            <div className="hero-top">
              <h1 className="hero-title">
                Queen's
                <br />
                UX Club
              </h1>
              <div href="#" className="join-btn">
                Join <ArrowUpRight style={{ width: "1rem", height: "1rem", marginLeft: "0.25rem" }} />
              </div>
            </div>
            <div className="hero-body">
              <div className="hero-text">
                <p>
                Queen's UX (User Experience) Club is a community for students of all backgrounds,
                 disciplines, and skill levels to explore, learn, and grow in user experience. 
                 We aim to connect curious minds through collaborative events, workshops, and 
                 projects that inspire better design for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision">
        {/* vision stars */}

        {/* vision content */}
        <div className="container">
          <div className="vision-content">
          <h2 className="vision-title">Vision</h2>
          <p className="vision-text">
            To be the leading student-driven community at Queen's University that inspires innovation and shapes the
            future of user experience by empowering the next generation of empathetic, creative, and interdisciplinary
            UX leaders.
          </p>
          </div>
        </div>
      </section>


      {/* Core Values Section */}
      <section className="values">
        <div className="container">
          <h2 className="values-title">
            Core Values
          </h2>

          <div className="values-grid">
            <div className="card value-card creativity">
              <div className="value-icon creativity">
                
              </div>
              <h3 className="value-title">Creativity</h3>
            </div>

            <div className="card value-card empathy">
              <div className="value-icon empathy">
              </div>
              <h3 className="value-title">Empathy</h3>
            </div>

            <div className="card value-card curiosity">
              <div className="value-icon curiosity">
              </div>
              <h3 className="value-title">Curiosity</h3>
            </div>

            <div className="card value-card inclusivity">
              <div className="value-icon inclusivity">
              </div>
              <h3 className="value-title">Inclusivity</h3>
            </div>
          </div>

          <div className="values-cta">
            <a href="#" className="btn btn-primary">
              Meet Our Team <ArrowUpRight style={{ width: "1rem", height: "1rem", marginLeft: "0.25rem" }} />
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="events">
        <div className="container">
          <h2 className="events-title">
            <span className="upcoming">Upcoming</span> <span className="events-word">Events</span>
          </h2>

          <div className="events-grid">
            <div className="event-card">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Workshop setup"
                width={400}
                height={200}
                className="event-image"
              />
              <div className="event-content">
                <div className="event-category">Workshops</div>
                <h3 className="event-title">Intro to Figma</h3>
                <p className="event-description">
                  Our first workshop introduces students to Figma, where they learn how to design, collaborate, and
                  prototype with this powerful design tool. Perfect for beginners looking to start their UX journey!
                </p>
              </div>
            </div>

            <div className="event-card">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Workshop classroom"
                width={400}
                height={200}
                className="event-image"
              />
              <div className="event-content">
                <div className="event-category">Workshops</div>
                <h3 className="event-title">Intro to Figma</h3>
                <p className="event-description">
                  Our first workshop introduces students to Figma, where they learn how to design, collaborate, and
                  prototype with this powerful design tool. Perfect for beginners looking to start their UX journey!
                </p>
              </div>
            </div>

            <div className="event-card">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Workshop session"
                width={400}
                height={200}
                className="event-image"
              />
              <div className="event-content">
                <div className="event-category">Workshops</div>
                <h3 className="event-title">Intro to Figma</h3>
                <p className="event-description">
                  Our first workshop introduces students to Figma, where they learn how to design, collaborate, and
                  prototype with this powerful design tool. Perfect for beginners looking to start their UX journey!
                </p>
              </div>
            </div>
          </div>

          <div className="events-cta">
            <a href="#" className="btn btn-primary">
              See All Events <ArrowUpRight style={{ width: "1rem", height: "1rem", marginLeft: "0.25rem" }} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">UX</div>
            <div className="social-links">
              <a href="#">
                <Mail className="social-icon" />
              </a>
              <a href="#">
                <Instagram className="social-icon" />
              </a>
              <a href="#">
                <Linkedin className="social-icon" />
              </a>
              <a href="#">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
