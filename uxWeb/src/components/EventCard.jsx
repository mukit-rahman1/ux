import "../styles/events.css"

export default function EventCard () {
    return (
        <div className="event-card">

            
                <div className="event-content">
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