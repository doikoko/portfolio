import React from "react";
import ChangeText from "./ChangeText";

class Topic extends React.Component{
    render() {
        console.log('render')
        return <header>
            <ChangeText />
        </header>
    }
}

export default Topic