import "../styles/team.css";
import MiniNavbar from "../components/MiniNavbar";
import MemberCard from "../components/MemberCard";
import { useState } from "react";

function Team() {
    const [selected, setSelected] = useState("cofounders");
    const navOptions = [
        {label: "Co-Founders", value: "cofounders"},
        {label: "Sponsorships", value: "sponsorships"},
        {label: "Marketing", value: "marketing"},
        {label: "Events", value: "events"},
        {label: "Hackathon", value: "hackathon"},
        {label: "Website", value: "website"}
    ];

    const teamData = {
        cofounders: [
            {name: "Alice", role: "Executive", image: "/image-url-here"},
            {name: "John", role: "Executive", image: "/image-url-here"},
            {name: "Holly", role: "Executive", image: "/image-url-here"},
            {name: "Gabe", role: "Executive", image: "/image-url-here"}
        ],
        sponsorships: [
            {name: "Eli", role: "Director", image: "/image-url-here"},
            {name: "Fay", role: "Executive", image: "/image-url-here"},
            {name: "John", role: "Executive", image: "/image-url-here"},
            {name: "Holly", role: "Executive", image: "/image-url-here"},
        ],
        marketing: [
            {name: "Eli", role: "Director", image: "/image-url-here"},
            {name: "Fay", role: "Executive", image: "/image-url-here"},
            {name: "John", role: "Executive", image: "/image-url-here"},
            {name: "Holly", role: "Executive", image: "/image-url-here"},
            {name: "Holly", role: "Executive", image: "/image-url-here"},
            {name: "Holly", role: "Executive", image: "/image-url-here"}
        ],
        events: [
            {name: "Eli", role: "Director", image: "/image-url-here"},
            {name: "Fay", role: "Executive", image: "/image-url-here"},
            {name: "John", role: "Executive", image: "/image-url-here"},
            {name: "Holly", role: "Executive", image: "/image-url-here"},
        ],
        hackathon: [
            {name: "Eli", role: "Director", image: "/image-url-here"},
            {name: "Fay", role: "Executive", image: "/image-url-here"},
            {name: "John", role: "Executive", image: "/image-url-here"},
            {name: "Holly", role: "Executive", image: "/image-url-here"},
        ],
        website: [
            {name: "Alice", role: "Executive", image: "/image-url-here"},
            {name: "John", role: "Executive", image: "/image-url-here"},
            {name: "Holly", role: "Executive", image: "/image-url-here"},
            {name: "Gabe", role: "Executive", image: "/image-url-here"}
        ]


    }
    
    return (
        <div className="min-h-[1330px]"> 
            <div className="mb-[33px]">
                <h1 className="">Our Team</h1>
                <p className="red-text">Meet the amazing people behind QUX</p>
            </div>
            <MiniNavbar options={navOptions} selected={selected} setSelected={setSelected} width="750px"/>
            <div className="mt-[33px] flex flex-col items-center gap-[66.93px]">
                {(() => {
                    console.log("yes", selected)
                    console.log("yes", teamData[selected])
                    const director = teamData[selected].find((member) => member.role === "Director");
                    return director ? (
                        <MemberCard name={director.name} role={director.role}/>
                    ) : null;
                })()}

                <div className={`executive-row ${teamData[selected].length == 4 ? "w-[50%]" : "w-[65%]"}`}>
                    {teamData[selected].map((member, index) => (
                        member.role != "Director" && <MemberCard name={member.name} role={member.role}/>            
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Team;