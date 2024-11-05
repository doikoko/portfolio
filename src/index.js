import Topic from "./topic/topic";
import "./styles/topic.css"
import "./styles/modal.css"
import {createRoot} from "react-dom/client";

let root = createRoot(document.getElementById('root'))
root.render(<Topic />)