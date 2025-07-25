import "../styles/header.css"
import "../styles/homepage.css"
import "../styles/footer.css"
import EventCarousel from "../components/UpcomingEventCarousel"
import { ArrowUpRight, Mail, Instagram, Linkedin } from "lucide-react"
import LinkButton from "../components/LinkButton"

export default function homepage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
       
        {/* Hero Content */}
        <div className="container">
          <div className="hero-content">
            <div className="hero-top">
              <h1 className="hero-title">
                Queen's
                <br />
                UX Club
              </h1>
              <LinkButton arrowStyle="up" className="join-btn">Join</LinkButton>
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
        <div className="container-values">
          <div className="values-content">
          <h2 className="values-title">
            Core Values
          </h2>

          <div className="values-grid">
            <div className="card value-card creativity">
              <h3 className="value-title">Creativity</h3>
              <img src="creativity.svg" alt="" />
            </div>

            <div className="card value-card empathy">

              <h3 className="value-title">Empathy</h3>
              <img src="empathy.svg" alt="" />
            </div>

            <div className="card value-card curiosity">

              <h3 className="value-title">Curiosity</h3>
              <img src="curiosity.svg" alt="" />
            </div>

            <div className="card value-card inclusivity">
              
              <h3 className="value-title">Inclusivity</h3>
              <img src="inclusivity.svg" alt="" />
            </div>
          </div>
          <LinkButton className="meet-team-btn" arrowStyle="up">Meet Our Team</LinkButton>
          </div>

        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="events">
        <div className="container-events">
          <h2 className="upcoming-events-title">
            Upcoming Events
          </h2>

         <div className="container-carousel">
            <EventCarousel cardNum={5} />
          </div>
          <LinkButton arrowStyle="up" className="events-btn" path="/events">See All Events</LinkButton>
        </div>
      </section>


      {/* stars */}
      <div className="stars">
        <img src="../hm_tr.svg" className="hm_tr" alt="" />
        <img src="../hm_bl.svg" className="hm_bl" alt="" />
      </div>

    </div>
  )
}
