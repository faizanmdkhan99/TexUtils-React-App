import './App.css';
import Navbar from "./components/Navigbar"; 
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import AlertComp from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

const [mode,setMode]=useState('light');
const [alert,setAlert]=useState(null);


const showAlert=(message,type)=>{
      setAlert({msg:message,type:type})
      setTimeout(()=>{
        setAlert();
      },2000)
}

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor="#224e83";
    showAlert('Dark mode has been enabled','success');
  }
  else{
    setMode("light");
    document.body.style.backgroundColor="white";
    showAlert('Dark mode has been disabled','success');
  }
}


  return (
    <>
    <BrowserRouter>     {/* Put it outside everything to avoid errors  */}
       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
       <AlertComp  alert={alert} />
       <div className="container my-3">
          {/* Use 'exact path' because React does Partial path matching and it will think '/users/me' is same as '/users'  */}
        <Routes>                                                                 
            <Route exact path ="/about" element={<About mode={mode}/>}/>   
            <Route exact path ="/" element={<TextForm showAlert ={showAlert} heading="Enter your text for analysis " mode={mode} />}/> 
         </Routes>
        
      
        </div>
       {/* <TextForm heading="Enter the text to analyse" mode={mode} showAlert={showAlert}/> */}
       </BrowserRouter>
    </>
  );
}

export default App;
