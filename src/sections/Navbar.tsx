import {useState} from "react";
import {NAVLINKS} from "../constants";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {NAVLINKS.map(({id, name, href}) =>
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a">{name}</a>
                </li>
            )}
        </ul>
    )
}

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className={"flex justify-between items-center py-5 mx-auto c-space"}>
                    <a href={"/"} className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Riccardo Colombo
                    </a>
                    <button onClick={toggleMenu}
                            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                            aria-label="Toggle menu open"><img src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                                                               alt={"toggle"} className={"w-6 h-6"}/></button>
                    <nav className={`sm:flex ${isOpen ? "block" : "hidden"}`}><NavItems/></nav>
                </div>
            </div>
        </header>
    );
};
