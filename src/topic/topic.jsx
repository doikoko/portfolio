import React from "react";
import ChangeText from "./changeText";
import Modal from "./modal";

class Topic extends React.Component{
    constructor(props) {
        super(props);
        this.links = {
            telegram: "https://t.me/DaniilSasunov",
            gmail: "danilsasunov.2089@gmail.com",
            mobilePhone: "+7(959)156-07-97",
        }
    }
    render() {
        return <header>
            <figure id={'topOval'}></figure>
            <figure id={'emptyOval'}></figure>
            <figure id={'photoOval'}></figure>
            <ChangeText/>
            <hr/>
            <ul>
                <li onClick={() => Modal(1)}>tgIcon</li>
                <li onClick={() => Modal(2)}>gmIcon</li>
                <li onClick={() => Modal(3)}>PhIcon</li>
            </ul>
            <div id="modelMain"></div>
        </header>
    }
}

export default Topic