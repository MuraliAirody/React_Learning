import React, { useState, useEffect } from 'react'

function TextForm(props) {
    const [text, setText] = useState("")
    const [isCopied,setIsCopied] = useState(false)

    const changeTextToUpper = () => {
        // console.log(text)
        setText(text.toUpperCase())
        //    console.log(text) // here text wont change bcz, setText is an asynchronous
    }
    const changeTextToLower = () => {
        // console.log(text)
        setText(text.toLowerCase())
    }

    // useEffect(() => {
    //     // console.log("inside use effect", text);
    // }, [text])

    const updateTextState = (event) => {
        setText(event.target.value)
    }

    const getWordCount = (text) =>{
        const words = text.trim().split(/\s+/);
        // console.log("array of words ",words)
        const filteredWords = words.filter(word => word.match(/[a-zA-Z]/));
        // console.log("filtered words ",filteredWords)
        return filteredWords.length;
    }

    const getNumberofSentences = (text)=>{
      const sententses = text.trim() === ""?[]:text.trim().split('.').filter((sent)=>sent.trim()!="")
    //   console.log("sentenses ",sententses)
      return sententses.length
    }

    const removeExtraSpace=()=>{
        const textArr = text.trim().split(/[ ]+/);
        console.log("text array ",textArr);

        setText(textArr.join(" "))
    }
    const copyText =()=>{
        if(!isCopied){
            window.navigator.clipboard.writeText(text)
            setIsCopied(true)
        }
    }

    useEffect(()=>{
        setIsCopied(false)
    },[text])

    return (
        <>
            <div className="d-flex flex-column  flex-wrap" >
                <div className="container">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" placeholder='enter text here' id="exampleFormControlTextarea1" onChange={updateTextState} rows="8" value={text} style={{backgroundColor:'#dcdcdc',borderRadius:'20px'}}></textarea>
                    <div className="mt-3 d-flex justify-content-center">
                        <button type="button" className="btn btn-primary" onClick={changeTextToUpper}>To UpperCase</button>
                        <button type="button" className="btn btn-primary ms-3" onClick={changeTextToLower}>To LowerCase</button>
                        <button type="button" className="btn btn-primary ms-3" onClick={removeExtraSpace}>Remove Extra Space</button>
                        <button type="button" className="btn btn-primary ms-3" onClick={copyText}><span>{isCopied?'Copied':'Copy'}</span></button>
                    </div>
                </div>
                <div className="container">
                    <h2>Text Summary</h2>
                    <p><span style={{backgroundColor:"#dcdcdc"}}>{getWordCount(text)} word and {text.length} character </span></p>
                    <p><span style={{backgroundColor:"#dcdcdc"}}>{(getWordCount(text) * 0.0083).toFixed(2)} Minutes to read</span></p>
                    <p><span style={{backgroundColor:"#dcdcdc"}}>Number of sentences: {getNumberofSentences(text)}</span></p>

                    <h2>Preview</h2>
                    <p><span style={{backgroundColor:"#dcdcdc"}}>{text}</span></p>
                </div>
            </div>
        </>
    )
}

export default TextForm