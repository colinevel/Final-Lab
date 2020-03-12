import React, { useState } from 'react';


export default function CustomizeImage() {

    const [size, setSize] = useState("");
    const [url, setURL] = useState("");


    const handleURL = e => {
        const newURL = e.target.value;
        setURL(newURL);
    }

    const handleSize = e => {
        const newSize = e.target.value;
        setSize(newSize);
    }

    return (
        <div>
            <input type="text" onInput={handleURL}/>
            <input type="range" min="0" max="200" onInput={handleSize}/>
            <p>{size} x {size}px</p>
            <img src={`${url}`} width={size} height={size} alt=""/>
        </div>
    )
}


