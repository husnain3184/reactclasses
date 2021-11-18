import React, { useState } from 'react';

const Textarea = () =>{

    const [text, setText] = useState("Hellow");
    const touppercase = () =>{
        const newtext = text.toUpperCase();
        setText(newtext);
    }
        
    
    return(
        <form>
            <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text}></textarea>
            </div>
            <button type="button" className="btn btn-primary mr-4" onClick={touppercase} >Upper case</button>
                <button type="button" className="btn btn-secondary mr-4">Lower case</button>
                <button type="button" className="btn btn-success mr-4">copy text</button>
                <button type="button" className="btn btn-danger mr-4">clear</button>
            </form>
    )
}
export default Textarea;