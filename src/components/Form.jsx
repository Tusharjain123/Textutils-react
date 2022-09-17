import React, { useState } from 'react'

export default function Form(props) {
    const [text, setText] = useState("")

    const handleChange = (event) => {
        setText(event.target.value)

    }

    const handleClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to Upper Case","success")
    }
    const handleClickd = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to Upper Case","success")
    }
    const clear = () => {
        setText("")
        props.showAlert("Cleared the text","success")
    }


    return (
        <div className="container my-4" style={{color: props.mode === "dark" ? "white" : "#042743" }}>
            <h1>Enter Text</h1>
            <div>
                <textarea className="form-control" value={text} onChange={handleChange} id="box" rows="6" style={{ backgroundColor: props.mode === "dark" ? "grey" : "white" , color: props.mode === "dark" ? "white" : "#042743" }}  ></textarea>
            </div>
            <button className="btn btn-primary my-4" onClick={handleClick}>Convert to Upper Case</button>
            <button className="btn btn-primary my-4 mx-3" onClick={handleClickd}>Convert to Lower Case</button>
            <button className="btn btn-primary my-4 mx-3" onClick={clear}>Clear Text</button>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words {text.split("").length} characters </p>
            <p>{0.008 * text.split(" ").length} min take to read this.</p>
            <h5>{text.length > 0 ? text : "Enter Something to preview it here"}</h5>
        </div>
    )
}
