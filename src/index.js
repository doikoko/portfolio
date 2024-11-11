import Topic from "./topic/topic";
import About from "./about/about";
import Projects from "./projects/projects";

import "./styles/index.css"

import {createRoot} from "react-dom/client";

let root = createRoot(document.getElementById('root'))
root.render(<>
    <Topic />
    <About />
    <Projects />
    </>
)