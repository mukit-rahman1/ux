import { useState } from "react";
import MiniNavbar from "../components/MiniNavbar";

export default function Events () {
    const [selected, setSelected] = useState("events")

    const navOptions = [
        {label: "Events", value: "events"},
        {label: "Workshops", value: "workshop"}
    ];

    return (
        <div  className="min-h-[1330px]">
            <div className="mb-[33px]">
                <h1 className="h-[86px] w-[639px]">Events & Workshops</h1>
                <p className="red-text">Explore opportunities to learn UX research and design</p>
            </div>
            <MiniNavbar options={navOptions} selected={selected} setSelected={setSelected}/>
            <div>
                <h2 className="">Upcoming Events</h2>

            </div>
        </div> 
    )
}