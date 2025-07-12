import { useState } from "react";
import "../styles/events.css"
import MiniNavbar from "../components/MiniNavbar";
import EventCard from "../components/EventCard";
import UpcomingEventCarousel from "../components/UpcomingEventCarousel";
import PrevEventCarousel from "../components/PrevEventCarousel";
export default function Events () {
    const [selected, setSelected] = useState("Events")

    const navOptions = [
        {label: "Events", value: "events"},
        {label: "Workshops", value: "workshops"}
    ];

   

    return (
        <div  className="min-h-[1330px]">
            <div className="mb-[33px]">
                <h1 className="h-[86px] w-[639px]">Events & Workshops</h1>
                <p className="red-text">Explore opportunities to learn UX research and design</p>
            </div>
            <MiniNavbar options={navOptions} selected={selected} setSelected={setSelected}/>
            <div>
                <h2 className="event-category-title">Upcoming {selected}</h2>
                <div className="flex items-center justify-center mt-[59px]">
                    <UpcomingEventCarousel cardNum={7} />
                </div>
            </div>
            <div>
                <h2 className="event-category-title">Previous {selected}</h2>
                <div className="flex items-center justify-center mt-[59px]">
                    <PrevEventCarousel cardNum={8} type="previous"/>
                </div>
            </div>
         

        </div> 
    )
}