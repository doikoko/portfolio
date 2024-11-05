import React from "react";
import ChangeText from "./changeText";
import Modal from "./modal";
import gmailIcon from "../img/gmail.png"
import telegramIcon from "../img/telegram.png"
import phoneIcon from "../img/telephone.png"

class Topic extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            modalIsActive: false,
            modalNumber: 0
        }
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
            <div id={'contacts'}>
                <img src={telegramIcon} alt={"telegram"} onClick={() => this.setState({modalIsActive: true, modalNumber: 1})}></img>
                <img src={gmailIcon} alt={"gmail"} onClick={() => this.setState({modalIsActive: true, modalNumber: 2})}></img>
                <img src={phoneIcon} alt={"phone"} onClick={() => this.setState({modalIsActive: true, modalNumber: 3})}></img>
            </div>
            <Modal isActive={this.state.modalIsActive} number={this.state.modalNumber}/>
        </header>
    }
}

export default Topic