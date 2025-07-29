import "../styles/events.css"

export default function EventCard ({ type="upcoming" }) {

    return (
        <div className={`event-card w-[300px]`}>
            <div className="flex flex-col">
                <img src="../Group 10.svg" className=" w-[175px]" alt="Event" draggable={false} />
                <h3 className="event-title !text-[20px] mt-4"> <span className="event-title-colour">Events</span> <br />Intro to Figma</h3>
                <p className="event-description mb-4">
                    Our first workshop introduced students to Figma, where they learned to design wireframes and 
                    prototypes from scratch. By the end, everyone had hands-on experience and a basic project to show off!
                </p>
                
                <button className="event-btn">View Gallery</button>
            </div>
            
        </div>
    )
}