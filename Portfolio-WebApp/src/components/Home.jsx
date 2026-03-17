import JavaScriptLogo from '../assets/JavaScript-logo.png'
import JavaLogo from '../assets/Java-logo.png'
import CSharpLogo from '../assets/Csharp-Logo.png'
import LuaLogo from '../assets/Lua-Logo.png'

function HomeContentContainer() {
    return (

      // Language Knowledge Section
      <div className="language-knowledge-div">
        <div className="logo-div">
          <img src={JavaScriptLogo} alt="JavaScript Logo" className="logo" />
          <p className="description-text">
            I have experience with JavaScript, and I have used it to create various projects, including this website. I have also used JavaScript to create a variety of web applications, such as a weather app, a to-do list app, and a chat app.
          </p>
        </div>
        <div className="logo-div">
          <img src={JavaLogo} alt="Java Logo" className="logo" />
          <p className="description-text">
            Java is a versatile programming language that I have used for various projects, including Android app development and backend server applications. I have experience with Java frameworks such as Spring Boot and have created RESTful APIs and web applications using Java.
          </p>
        </div>
       <div className="logo-div">
          <img src={CSharpLogo} alt="C# Logo" className="logo" />
          <p className="description-text">
            C# is a powerful programming language that I have used for game development and desktop applications. I have experience with the Unity game engine, where I have created 2D and 3D games using C#. Additionally, I have developed Windows Forms applications and WPF applications using C#.
          </p>
        </div>
        <div className="logo-div">
          <img src={LuaLogo} alt="Lua Logo" className="logo" />
          <p className="description-text">
            Lua is a lightweight scripting language that I have used for game development and embedded systems. I have experience with the Roblox platform, where I have created games and interactive experiences using Lua. Additionally, I have used Lua for scripting in various applications and game engines.
          </p>
        </div>
      </div>

      // Other sections of the home page can be added here
      
    )
}

export default HomeContentContainer