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

function Contact() {
    return (
        <body>
            <div>
                <h1 className="contact-page-header" {...console.log("Hello")}>Contact Page</h1>
            </div>
            <div>
                <h1>{<MouseLocation />}</h1>
            </div>
        </body>
    )
}

export default Contact