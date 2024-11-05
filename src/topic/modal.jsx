import React from "react";

function Modal(props){
    let isActive = props.isActive
    let number = props.number
    if (isActive) {
        return (
            <div id="modal">
                <div className={`modalDisplay modalDisplay${number}`}>
                    <div id="modalBody">
                        <div id="modalFooter">
                            <button id={"follow"} value={"follow"}></button>
                            <button className={`close close${number}`} value={"close"}></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal