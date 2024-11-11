import Topic from "./topic/topic";
import About from "./about/about";

import "./styles/topic.css"
import "./styles/modal.css"
import "./styles/about.css"
import "./styles/cards.css"

import {createRoot} from "react-dom/client";

let root = createRoot(document.getElementById('root'))
root.render(<>
    <Topic />
    <About />
    </>
)