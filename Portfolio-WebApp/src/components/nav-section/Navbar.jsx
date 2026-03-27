import { Link } from "react-router-dom"
import NavbarButton from "../buttons/NavbarButtons"

function NavBar() {
    return (
        <header>
            <div className="header-flex-container">
                <h1 className="web-title">Portfolio</h1>
            </div>

            <nav className="nav-bar">
                <div className="nav-bar-div">
                    <Link to="/">
                        <NavbarButton text={"Home"}></NavbarButton>
                    </Link>
                    <NavbarButton text={"[WIP]"}></NavbarButton>
                    <Link to="/contact">
                        <NavbarButton text={"Contact"}></NavbarButton>
                    </Link>
                    <NavbarButton text={"Random Page"}></NavbarButton>
                </div>
            </nav>
        </header>
    )
}

export default NavBar