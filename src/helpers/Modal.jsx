import React from "react";
import "./Model.css";

function Modal({isOpen, toggle, children}){
    if(!isOpen) return null;
    return(
        <div className="modal-overlay" onClick={toggle}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
                <button onClick={toggle}>close</button>
            </div>
        </div>
    )
}

export default Modal