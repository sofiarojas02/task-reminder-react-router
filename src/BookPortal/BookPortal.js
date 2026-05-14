import React from "react"
import ReactDOM from 'react-dom';

function NewBook ({children}){
    return ReactDOM.createPortal(
        <div>
            {children}
        </div>,
    document.getElementById('newBookPortal')
    )
}

export {NewBook}