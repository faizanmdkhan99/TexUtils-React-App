import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


export default function AlertComp(props) {
 
    return (
      <div style={{height:'50px'}}>
      {props.alert && <Alert key={props.alert.type} variant={props.alert.type}>
          <p><strong> {props.alert.type}: </strong> {props.alert.msg}</p>
        </Alert>}
        </div>
    );
  }



