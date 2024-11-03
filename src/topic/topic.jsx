import React from "react";
import ChangeText from "./ChangeText";


class Topic extends React.Component{
    render() {
        return <header>
            <figure id={'topOval'}></figure>
            <figure id={'emptyOval'}></figure>
            <figure id={'photoOval'}></figure>
            <ChangeText/>
        </header>
    }
}

export default Topic