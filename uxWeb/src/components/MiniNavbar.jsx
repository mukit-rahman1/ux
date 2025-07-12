export default function MiniNavbar({ options, setSelected, selected }) {
    return (
            <div className="mini-navbar">
                {
                    options.map((option) => (
                        <button 
                        key={option.value} 
                        className={`option ${selected == option.label && ("bg-gradient-to-r from-[#8FB1BE] via-[#00022B] to-[#D53302] text-white")}`} 
                        onClick={() => setSelected(option.label)}>
                            {option.label}
                        </button>
                    ))
                }
            </div>
        
    )
}