import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function TextForm(props)
{

    const [text,setText]=useState("");
  
const upperClick=(event)=>{
setText(text.toUpperCase());
}
const handleChange=(e)=>{
setText(e.target.value);   
}
const lowerClick=()=>{
  setText(text.toLowerCase());
}
const emailExtract=()=>{
var string = text; // Your string containing
var regex = /<(.*)>/g; // The actual regex
var matches = regex.exec(string);
setText(matches[1]);
}

const invertCase = () => {
  const newText = text.replace(/./g, (c) =>
    c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
  );
  setText(newText);
  props.showAlert('Text has been invert cased','info')
  
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}


    return ( 
    <div  className="smaller-margin" style={{color:props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>    
    <Form>
    <Form.Group className="mb-1" controlId="formBasicEmail">
      <Form.Control as="textarea" className="margin-top" value={text} onChange={handleChange} style={{height:'220px',color:props.mode==='light'?'black':'white', backgroundColor:props.mode==='light'?'white':'#224e83'}} placeholder="Enter text" />
    </Form.Group>
    <Button style={{marginTop:'10px', marginLeft:'5px'}} variant={props.mode==='light'?'primary':'dark'} onClick={upperClick}>Convert to uppercase</Button>{' '}
    <Button style={{marginTop:'10px', marginLeft:'5px'}} variant={props.mode==='light'?'primary':'dark'} onClick={lowerClick}>Convert to lowercase</Button>{' '}
    <Button style={{marginTop:'10px', marginLeft:'5px'}} variant={props.mode==='light'?'primary':'dark'} onClick={emailExtract}>Extract email</Button>{' '}
    <Button style={{marginTop:'10px', marginLeft:'5px'}} variant={props.mode==='light'?'primary':'dark'} onClick={invertCase}>Invert Case</Button>{' '}
    <Button style={{marginTop:'10px', marginLeft:'5px'}} variant={props.mode==='light'?'primary':'dark'} onClick={speak}>Speech</Button>{' '}

  </Form>
  <div className='margin-top'>
  <h4>Your Text summary</h4>
      <p> You have {text.split(' ').filter((elem)=>{
            return (elem.length!==0);
      }).length} words and {text.length} characters</p>
      <p> You will take {0.008*text.split(' ').filter((elem)=>{
            return (elem.length!==0);
      }).length} minutes to read this</p>
      <p> You have {text.split('.').filter((elem)=>{
            return (elem.length!==0);
      }).length} sentences</p>
  <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in text box to preview it here"}</p>
  </div>

     
    </div>
  )
}

export default TextForm;
