import { useEffect, useState } from "react";

function MouseLocation() {

    const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });
    useEffect(() => {

        const handleMouseMove = (event) => {
            setMouseLocation({
                x: event.clientX,
                y: event.clientY,
            })
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }

    }, [])
    return (
        <span>
            X: {mouseLocation.x} Y: {mouseLocation.y}
        </span>
    )
}

function ClickyButton(props) {
    return <button>{props.title}</button>
}

function Contact() {
    return (
        <body>
            <div>
                <h1 className="contact-page-header">Contact Page</h1>
            </div>
            <div>
                <h1>{<MouseLocation />}</h1>
                <ClickyButton title="Click Me Please!"></ClickyButton>
                <br/>
                
            </div>
        </body>
    )
}

export default Contact