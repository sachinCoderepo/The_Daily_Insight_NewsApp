import React, { useState } from 'react';




export default function TextForm(prop) {
  const [text, setText] = useState("Enter text Here");

   const HandleUpClick = ()=>{
        // console.log("Button is click" + text)
        let newText = text.toUpperCase();
        setText (newText);}
        
    const handleOnChange = (event)=>{
        // console.log("onChange")
        setText(event.target.value);
    }
    const HandleDownClick = ()=>{
      // console.log("Button is click" + text)
      let newText = text.toLowerCase();
      setText (newText);}


  const SpeakClick = () => {
      const msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
     };
  return (
    <div>
      <h3>{prop.heading}</h3>
      <div className='mb-3'>
        <textarea className="postContent" placeholder={text} onChange={handleOnChange} rows={6} cols={100}></textarea>
        </div>
      <div  style={{ display: 'flex', justifyContent: 'space-between',marginRight: '120px' }}>
      <button className="btn btn-primary"onClick={HandleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary"onClick={SpeakClick}>Voice</button>
        <button className="btn btn-primary"onClick={HandleDownClick}>Convert to LowerCase</button>

        </div >
      <h2 className='my-4' >Your Text Summary</h2>
      
      <p>{text.split(" ").length} Words and {text.length} Charecters</p>
      <p>Can be read in {0.008 * text.split(" ").length} Minutes</p>
      <h4>Preview</h4>
      <p>{text}</p>
     
    </div>
  );
}

