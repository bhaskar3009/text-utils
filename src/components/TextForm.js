import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked"+text);
        let newText =text.toUpperCase();
        setText(newText);

    }
    const handleDownClick = () =>{
        // console.log("Uppercase was clicked"+text);
        let newText =text.toLowerCase();
        setText(newText);

    }
    // const handleCapClick = () =>{
    //     // console.log("Uppercase was clicked"+text);
    //     let newText =text.toCa();
    //     setText(newText);

    // }
    const handleOnChange = (event) =>{
        // console.log("On change!");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("text1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpacess = () => {
        var newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState("Enter the text here...");
    return (
        <>

        <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
            <h3 className="my-3">{props.heading}</h3>
            <div className="my-3">
                <textarea value={text} onChange={handleOnChange} className="form-control" style={{backgroundColor:props.mode==="dark"?"grey":"white",  color:props.mode==='dark'?'white':'black'}} id="text1" rows="3"></textarea>
                <button className="btn btn-primary my-2 mx-5" onClick={handleUpClick}>Covert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-5" onClick={handleDownClick}>Covert to Lowercase</button>
                <button className="btn btn-primary my-2 mx-5" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-2 mx-5" onClick={handleExtraSpacess}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-5" style={{color:props.mode==="dark"?"white":"black"}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} chaacters</p>
            <p>{0.008 * text.split(" ").length} minutes needed to read the text!!!</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>
        </>
    )
}
