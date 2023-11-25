// import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <div className="text-3xl font-semibold text-green-500">
            <Typewriter
                options={{
                    strings: [
                        "Front-End Web Developer",
                        "Intern",
                        "I love to write code",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 100,
                }}
            />
        </div>
    );
}

export default Type;
