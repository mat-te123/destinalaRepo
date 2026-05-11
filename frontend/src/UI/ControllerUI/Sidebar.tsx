

function Sidebar() {

    const Logo : string = "./Logo.png"
    const Home : string = "./Home.png"
    const Stat : string = "./Stat.png"
    const Plus : string = "./plus-square.png"
    const User : string = "./User.png"

    return(
        <div className="flex flex-col p-5 justify-between items-center border-r border-[#D7D7D7] h-screen">
            {/* Main Icon */}
            <div className="flex flex-col justify-between items-center gap-10">
                <img src={Logo} alt="Logo" />
                <img src={Home} alt="Home" />
                <img src={Stat} alt="Stat" />
                <img src={Plus} alt="Plus" />
            </div>
            {/* User Profile */}
            <div>
                <img src={!User? User : "./placeholder.svg"} alt="User" className="object-cover rounded-full h-10 w-10" />
            </div>

        </div>

    )
}

export default Sidebar;