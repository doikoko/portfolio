import React from "react";

class About extends React.Component {

    render() {
        return(
            <div id={"about"}>
                <h1 id={"aboutTitle"}>About</h1>
                <div id={"aboutMain"}>
                    <div id={"aboutTextContainer"}> <p id={"aboutText"}>Hello, i'm junior front-end developer <br/>
                        with a passion for making web apps. <br/>
                        In this site i will public my future projects. <br/>
                        I wish i will interest you</p>
                    </div>
                    <ul>
                        <li>React</li>
                        <li>JS</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Soon</li>
                    </ul>
                </div>
                <h1 id={"skills"}>skills</h1>
                <figure id={"aboutCircle"}></figure>
            </div>
        )
    }
}

export default About;