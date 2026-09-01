import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function MemberCard({ name, role, headshot }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const tiltEnable = typeof window !== "undefined" && window.innerWidth > 1024;
        const card = cardRef.current;
        if (!tiltEnable || !card) return;

        VanillaTilt.init(card, {
            max: 12,
            perspective: 1000,
            easing: "cubic-bezier(.03,.98,.52,.9)",
            speed: 1200,
            glare: true,
            "max-glare": 0.15,
            scale: 1.04,
            gyroscope: false,
        });

        return () => card.vanillaTilt?.destroy();
    }, []);

    return (
        <div className="member-container">
            <div className="member-border" ref={cardRef}>
                <div className={`member-card`}>
                    {headshot && (
                        <img
                            className="headshot"
                            src={headshot}
                            loading="eager"
                            decoding="async"
                            fetchpriority="high"
                        />
                    )}
                </div>
            </div>
            <div className="member-textbox ">
                <h3 className="text-[20px] font-[600] h-[27px] whitespace-nowrap text-clip">{name}</h3>
                <p className="member-role">{role}</p>
            </div>
        </div>
    )
}
