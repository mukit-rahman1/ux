export default function MiniNavbar({ options, setSelected, selected }) {
   
    return (
            <div className="mini-navbar ">
                {
                    options.map((option) => (
                        <button 
                        key={option.value} 
                        className={`mini-navbar-option text-[clamp(8px,1vw,18px)] ${selected == option.value && 
                            ("bg-gradient-to-r from-[#8FB1BE] via-[#00022B] to-[#D53302] text-white ")}`} 
                        onClick={() => setSelected(option.value)}>
                            {option.label}
                        </button>
                    ))
                }
            </div>
        
    )
}