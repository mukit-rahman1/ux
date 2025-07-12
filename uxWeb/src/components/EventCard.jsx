import "../styles/events.css"

export default function EventCard ({ type="upcoming" }) {

    if (type == "upcoming") {
        return (
            <div className={`event-card w-[825px]`}>
                    <div className="event-upcoming-content">
                        <h3 className="event-title"> <span className="event-title-colour">Workshops</span> <br />Intro to Figma</h3>
                        <p className="event-description">
                        Our first workshop introduced students to Figma, where they learned to design wireframes and 
                        prototypes from scratch. By the end, everyone had hands-on experience and a basic project to show off!
                        </p>
                    </div>
                    <img src="../Group 10.svg" className="h-[311px] w-[374px]" alt="Event" draggable={false} />
            </div>
        )
    }

    return (
        <div className={`event-card w-[433px] h-[529px]`}>
            <div className="event-prev-content">
                <h3 className="event-title"> <span className="event-title-colour">Events</span> <br />Intro to Figma</h3>
                <p className="event-description">
                    Our first workshop introduced students to Figma, where they learned to design wireframes and 
                    prototypes from scratch. By the end, everyone had hands-on experience and a basic project to show off!
                </p>
                <img src="../Group 10.svg" className="h-[311px] w-[374px]" alt="Event" draggable={false} />
                <button className="event-btn">View Gallery</button>
            </div>
            
        </div>
    )
}