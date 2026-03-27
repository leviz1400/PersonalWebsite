import { Link } from "react-router-dom"

function NavBar(props) {
    return (
        <header>
            <div className="header-flex-container">
                <h1 className="web-title">Portfolio</h1>
            </div>

            <nav className="nav-bar">
                <div className="nav-bar-div">
                    <Link to="/">
                        <button className="nav-btn">Home</button>
                    </Link>
                    <button className="nav-btn">About</button>
                    <Link to="/contact">
                        <button className="nav-btn">Contact</button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar