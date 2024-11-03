import Topic from "./topic/topic";
import "./topic/topic.css"
import {createRoot} from "react-dom/client";

let root = createRoot(document.getElementById('root'))
root.render(<Topic />)