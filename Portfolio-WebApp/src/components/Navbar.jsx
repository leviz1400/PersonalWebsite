function AppHeaderNavBar() {
    return (
        <header>
            <div className="header-flex-container">
                <h1 className="web-title">Portfolio</h1>
            </div>

            <nav className="nav-bar">
                <div className="nav-bar-div">
                    <button className="nav-btn">Home</button>
                    <button className="nav-btn">About</button>
                    <button className="nav-btn">Contact</button>
                </div>
            </nav>
        </header>
    )
}

export default AppHeaderNavBar