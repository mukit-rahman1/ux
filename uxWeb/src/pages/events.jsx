import { useState } from "react";
import "../styles/events.css"
import MiniNavbar from "../components/MiniNavbar";
import EventCard from "../components/EventCard";
import UpcomingEventCarousel from "../components/UpcomingEventCarousel";
import PrevEventCarousel from "../components/PrevEventCarousel";


export default function Events () {
    const [selected, setSelected] = useState("events")

    const navOptions = [
        {label: "Events", value: "events"},
        {label: "Workshops", value: "workshops"}
    ];

    return (
        <div className="min-h-[1330px]" id="hero">
            <div className="mb-[33px]">
                <h1 className="">Events and Workshops</h1>
                <p className="red-text">Explore opportunities to learn UX research and design</p>
            </div>
            <MiniNavbar options={navOptions} selected={selected} setSelected={setSelected}/>
            <div>
                <h2 className="event-category-title">Upcoming {selected[0].toUpperCase() + selected.slice(1)}</h2>
                <div className="flex items-center justify-center mt-[59px]">
                    <UpcomingEventCarousel cardNum={7} />
                </div>
            </div>
            <div className="mb-[244px]">
                <h2 className="event-category-title">Previous {selected[0].toUpperCase() + selected.slice(1)}</h2>
                <div className="flex items-center justify-center mt-[59px]">
                    <PrevEventCarousel cardNum={8} type="previous"/>
                </div>
            </div>
         

        </div> 
    )
}