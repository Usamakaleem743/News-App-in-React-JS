import React ,{useState}from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Alert from './components/Alert';
// import admin from './admin';


const App=()=>  {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState("null");

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setAlert("null");
    }, 1500);
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#1F1E1F';
      showAlert("Dark mode has been Enabled","success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled","success");
    }
  }
    
    return (
      <div>
        <Router>
        
        <Navbar mode={mode} togglemode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
          
        <Route exact path="/" element={<News  key="sports" pagesize={12 }mode={mode}   category="general"/>}></Route>
        <Route exact path="/sports" element={<News  key="sports" pagesize={12} mode={mode} category="sports"/>}></Route>
        <Route exact path="/business" element={<News  key="business" pagesize={12} mode={mode} category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News  key="entertainment" pagesize={12} mode={mode} category="entertainment"/>}></Route>
        <Route exact path="/health" element={<News  key="health" pagesize={12} mode={mode} category="health"/>}></Route>
        <Route exact path="/science" element={<News  key="science" pagesize={12} mode={mode} category="science"/>}></Route>
        <Route exact path="/technology" element={<News  key="technology" pagesize={12} mode={mode} category="technology"/>}></Route>
        {/* <Route exact path="/admin" element={<admin  key="admin"  mode={mode}/>}></Route> */}


        </Routes>
        
        </Router>
      </div>
    )
  }

export default  App