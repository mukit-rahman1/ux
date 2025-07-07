import "../styles/homepage/header.css";

export default function Navbar() {
    return (
        <div className="navbar-home">
            <div className="logo w-[60px] h-[46px]">
                <img src="../Logo.svg" alt="UX" className="ux-logo"/>
            </div>
            <div className="nav-links">
                <a href="/team">Our Team</a>
                <a href="/events">Events</a>
                <a href="/hackathon">Hackathon</a>
                <a href="/sponsorship">Sponsorship</a>
                <a href="/projects">Projects</a>
            </div>
            <a href="#" className="contact-btn">
                Contact
            </a>
        </div>
    )
}
