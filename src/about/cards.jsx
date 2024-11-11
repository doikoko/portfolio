import anim from "./animWhenVis";
import {useEffect, useRef} from "react";

import html from "../img/skillsIcons/html.png"
import css from "../img/skillsIcons/css.png"
import js from "../img/skillsIcons/js.png"
import react from "../img/skillsIcons/react.png"

function Cards(){
    const cardsAnim = useRef()

    useEffect(() => {
        anim(cardsAnim.current, "cardsAnim")
    }, []);

    return(
        <div id="cards" ref={cardsAnim}>
            <div id="card1">
                <div className={"card1Header cardHeader"}>
                    <img src={react} alt={"react"}/>
                </div>
                <h1 className="cardTitle">React</h1>
                <p>this site made by react</p>
            </div>
            <div id="card2">
                <div className={"card2Header cardHeader"}>
                    <img src={js} alt={"js"}/>
                </div>
                <h1 className="cardTitle">JS</h1>
            </div>
            <div id="card3">
                <div className={"card3Header cardHeader"}>
                    <img src={css} alt={"css"}/>
                </div>
                <h1 className="cardTitle">CSS</h1>
            </div>
            <div id="card4">
                <div className={"card4Header cardHeader"}>
                    <img src={html} alt={"html"}/>
                </div>
                <h1 className="cardTitle">HTML</h1>
            </div>
        </div>
)
}

export default Cards