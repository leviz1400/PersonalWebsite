import React from "react";

const NavbarButton = (props) => {
    return (
        <button className="nav-btn">
            {props.text}
        </button>
    );
}

export default NavbarButton;