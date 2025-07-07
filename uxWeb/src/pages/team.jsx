import "../styles/team.css";
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

    
    return (
        <div> 
            <div className="mb-[33px]">
                <h1 className="page-title">Our Team</h1>
                <p className="red-text">Meet the amazing people behind QUX</p>
            </div>
            <div className="mini-navbar">
                {
                    navOptions.map((option) => (
                        <button 
                        key={option.value} 
                        className={`option ${selected == option.value && ("bg-gradient-to-r from-[#8FB1BE] via-[#00022B] to-[#D53302] text-white")}`} 
                        onClick={() => setSelected(option.value)}>
                            {option.label}
                        </button>
                    ))
                }
            </div>
            <div>

            </div>
        </div>
    )
}

export default Team;