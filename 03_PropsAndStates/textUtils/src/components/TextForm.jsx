import React,{useState,useEffect}from 'react'

function TextForm(props) {
    const [text,setText] = useState("enter text here")

    const changeText = ()=>{
       console.log(text)
       setText(text.toUpperCase())
    //    console.log(text) // here text wont change bcz, setText is an asynchronous
    }

    useEffect(()=>{
      console.log("inside use effect",text);
    },[text])

    const updateTextState = (event)=>{
        setText(event.target.value)
    }
    return (
        <>
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={updateTextState} rows="8" value={text}></textarea>
            <div className="mt-3">
                <button type="button" className="btn btn-primary" onClick={changeText}>To UpperCase</button>
            </div>
        </>
    )
}

export default TextForm