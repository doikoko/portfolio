import React from "react";

class Projects extends React.Component {
    render() {
        return <div id={"projects"}>
            <h1 className={"textTitle"}>projects</h1>
            <p className={"mainText"}>in this page i will public my future projects</p>
            <a href="https://github.com/doikoko?tab=repositories" target={"_blank"} id={"gitLink"}>gitHub</a>
        </div>
    }
}

export default Projects