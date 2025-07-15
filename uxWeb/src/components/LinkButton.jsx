import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function LinkButton({children, arrowStyle="none", className="", path="/"}) {
    
    let arrow = ""
    if (arrowStyle != "none") {
        arrow = arrowStyle == "up" ? <ArrowUpRight style={{ width: "2rem", height: "2rem", marginBottom: "0.2rem" }} /> : "→"
    }

    return (
        <Link to={path}  
        className={`${className} text-[24px] font-[600] text-white inline-flex items-center bg-[#00022B]
        hover:bg-gradient-to-r from-[#A3280C] to-[#657F95] rounded-full cursor-pointer
        transition-all dration-200 ease-in-out py-2 px-4`} >
            {children + " "}
            {arrow}
        </Link>
    )
}
