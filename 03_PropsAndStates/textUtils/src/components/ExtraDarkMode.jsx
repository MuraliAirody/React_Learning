import React from 'react'

export default function ExtraDarkMode(props) {
    return (
        <div className='d-flex me-2 gap-2'>
            <div className="form-check">
                <input className="form-check-input" value="#483D8B" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={props.handleExtraDark}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        SlateBlue
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" value="#696969" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={props.handleExtraDark}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        DimGrey
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" value="dark" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked onClick={props.handleExtraDark}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Dark
                    </label>
            </div>
        </div>
    )
}
