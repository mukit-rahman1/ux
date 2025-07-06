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
          <div className="values-content">
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

    </div>
  )
}
