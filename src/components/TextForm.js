import React, { useState } from 'react';
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert to uppercase","success");
  };
  const handleLoClick = () => {
    // console.log("Upper case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("convert to lowecase","success");

  };
  const handleClearClick =()=>{
    let newText = '';
    setText(newText);
    props.showAlert("clear","success");

  }
  const handleOnChange = (event) => {
    // console.log("onchange");
    setText(event.target.value);

  };
  const [text, setText] = useState('');
  return (
    <div className="container" style={{color: props.mode=== 'dark'? 'white': '#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange} style= {{backgroundColor:props.mode === 'dark' ? 'grey' : 'white',
            color: props.mode=== 'dark'? 'white': 'black'
          }}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleClearClick}>
      Clear
      </button>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length> 0 ? text :"Enter somethingint the textbox above to preview it here"}</p>
      </div>
    </div>
  );
}
