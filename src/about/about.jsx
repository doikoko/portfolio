import React from "react";
import anim from "./animWhenVis";
import Cards from "./cards";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.circle = React.createRef();
    }
    componentDidMount() {
        anim(this.circle.current, "whiteCircle")
    }

    render() {
        return(
            <aside id={"about"}>
                <h1 id={"aboutTitle"}>About</h1>
                <div id={"aboutMain"}>
                    <div id={"aboutTextContainer"}>
                        <p id={"aboutText"}>Hello, i'm junior front-end developer <br/>
                            with a passion for making web apps. <br/>
                            In this site i will public my future projects. <br/>
                            I wish i will interest you</p>
                    </div>
                    <Cards/>
                </div>
                <figure id={"aboutCircleWhite"} ref={this.circle}></figure>
                <figure id={"aboutCircleBlack"}></figure>
            </aside>
        )
    }
}

export default About;