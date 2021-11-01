import React, { useState } from 'react'
import "./TabShowcase.css"

const TabShowcase = (props) => {
    const [image, setImage] = useState(props.image);
    const [text, setText] = useState(props.text);

    return (
        <div>
            <div className ="TS-container">
                <img alt = "Tssbs" src = {image}></img>
                <div className = "TS-cnt">
                <h3>{text}</h3>
                </div>
            </div>
        </div>
    )
}

export default TabShowcase
