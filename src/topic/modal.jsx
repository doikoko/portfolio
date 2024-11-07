import React from "react";
import gmailIcon from "../img/gmail.png"
import telegramIcon from "../img/telegram.png"
import phoneIcon from "../img/telephone.png"

function Modal({isActive, setIsActive, number}) {
    const links = {
        telegram: "https://t.me/DaniilSasunov",
        gmail: "danilsasunov.2089@gmail.com",
        mobilePhone: "+7(959)156-07-97",
    }
    if (isActive) {
        return (
            <div id="modal" onClick={()=> setIsActive(false)}>
                {number === 1 ? <img src={telegramIcon} alt={"telegram"}/> :
                number === 2 ? <img src={gmailIcon} alt={"gmail"}/> :
                number === 3 ? <img src={phoneIcon} alt={"phone"}/> : null}
                <div className={`modalDisplay modalDisplay${number}`} onClick={e => e.stopPropagation()}>
                    <div id="modalBody">
                        {number === 1 ? <a href={links.telegram}>{links.telegram}</a>:
                        number === 2 ? <a href={links.gmail}>{links.gmail}</a>:
                        number === 3 ? <h1>{links.mobilePhone}</h1>: null}
                    </div>
                    <div id="modalFooter">
                        {number !== 3 ?<form
                              action={number === 1 ? links.telegram : number === 2 ? `mailto:${links.gmail}` : null}
                              target="_blank">
                            <button className={`follow follow${number}`}>follow</button>
                        </form> : null}
                        <button className={`close ${number === 3 ? "close3" : null}`}
                                onClick={() => setIsActive(false)}>close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal