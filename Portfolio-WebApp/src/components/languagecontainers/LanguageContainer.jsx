import React from "react";
import Home from "../../pages/Home";

const LanguageContainer = (props) => {
    return (
        <div className="language-container-frame">
            <div className="logo-frame">
                <img src={props.imageSource} alt="Logo image" className="logo-image" />
            </div>
            <div className="language-description-frame">
                <p className="description-paragraph">
                    {props.paragraph}
                </p>
            </div>
        </div>
    );
}

export default LanguageContainer;