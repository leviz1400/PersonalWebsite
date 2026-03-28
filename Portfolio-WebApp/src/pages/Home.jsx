import JavaScriptLogo from '../assets/JavaScript-logo.png'
import JavaLogo from '../assets/Java-logo.png'
import CSharpLogo from '../assets/Csharp-Logo.png'
import LuaLogo from '../assets/Lua-Logo.png'
import LanguageContainer from '../components/languagecontainers/LanguageContainer'

import {useState} from 'react'
import { useEffect } from 'react'

function Home() {

    return (

        // Language Frame

        <div className="languages-frame">

            {/* JavaScript Section */}

            <LanguageContainer
            imageSource={JavaScriptLogo}
            paragraph="I have experience with JavaScript, and I have used it to create various projects, including this website. I have also used JavaScript to create a variety of web applications, such as a weather app, a to-do list app, and a chat app."
            ></LanguageContainer>

            {/* Java Section */}

            <LanguageContainer
            imageSource={JavaLogo}
            paragraph="I have experience with Java, and I have used it to create various projects, including this website. I have also used Java to create a variety of web applications, such as a weather app, a to-do list app, and a chat app."
            ></LanguageContainer>

            {/* C# Section */}

            <LanguageContainer
            imageSource={CSharpLogo}
            paragraph="I have experience with C#, and I have used it to create various projects, including this website. I have also used C# to create a variety of web applications, such as a weather app, a to-do list app, and a chat app."
            ></LanguageContainer>

            {/* Lua Section */}

            <LanguageContainer
            imageSource={LuaLogo}
            paragraph="I have experience with Lua, and I have used it to create various projects, including this website. I have also used Lua to create a variety of web applications, such as a weather app, a to-do list app, and a chat app."
            ></LanguageContainer>

        </div>
    )
}

export default Home;