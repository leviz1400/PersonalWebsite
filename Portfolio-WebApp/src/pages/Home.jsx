import JavaScriptLogo from '../assets/JavaScript-logo.png'
import JavaLogo from '../assets/Java-logo.png'
import CSharpLogo from '../assets/Csharp-Logo.png'
import LuaLogo from '../assets/Lua-Logo.png'

import {useState} from 'react'

function Home() {
    /*const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = (event) => {
        console.log("Hovered");
        setIsHovered(true);
    }

    const handleMouseLeave = (event) => {
        setIsHovered(false);
    }*/

    return (

        // Language Frame

        <div className="languages-frame">

            {/* JavaScript Section */}

            <div 
            className="language-container-frame"
            /*onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transform: isHovered ? 'translateY(-20px)' : 'translateY(0px)'

            }}*/
            >
                <div className="logo-frame">
                    <img src={JavaScriptLogo} alt="JavaScript Logo" className="logo-image" />
                </div>
                <div className="language-description-frame">
                    <p className="description-paragraph">
                        I have experience with JavaScript, and I have used it to create various projects, including this website. I have also used JavaScript to create a variety of web applications, such as a weather app, a to-do list app, and a chat app.
                    </p>
                </div>
            </div>

            {/* Java Section */}

            <div className="language-container-frame">
                <div className="logo-frame">
                    <img src={JavaLogo} alt="Java Logo" className="logo-image" />
                </div>
                <div className="language-description-frame">
                    <p className="description-paragraph">
                        I have experience with Java, and I have used it to create various projects, including this website. I have also used Java to create a variety of web applications, such as a weather app, a to-do list app, and a chat app.
                    </p>
                </div>
            </div>

            {/* C# Section */}

            <div className="language-container-frame">
                <div className="logo-frame">
                    <img src={CSharpLogo} alt="C# Logo" className="logo-image" />
                </div>
                <div className="language-description-frame">
                    <p className="description-paragraph">
                        I have experience with C#, and I have used it to create various projects, including this website. I have also used C# to create a variety of web applications, such as a weather app, a to-do list app, and a chat app.
                    </p>
                </div>
            </div>

            {/* Lua Section */}

            <div className="language-container-frame">
                <div className="logo-frame">
                    <img src={LuaLogo} alt="Lua Logo" className="logo-image" />
                </div>
                <div className="language-description-frame">
                    <p className="description-paragraph">
                        I have experience with Lua, and I have used it to create various projects, including this website. I have also used Lua to create a variety of web applications, such as a weather app, a to-do list app, and a chat app.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Home;