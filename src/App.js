import './App.css';
import { useState } from 'react';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)
  const [mode, setMode] = useState("light")


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert()
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.color = "black"
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
      // setInterval(()=>{
      //   document.title="TextUtils is amazing"

      // },2000)
      // setInterval(()=>{
      //   document.title="Use TextUtils Now"
      // },1500)

    }
    else {
      setMode("dark")
      document.body.style.color = "white"
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Light mode"
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Routes>
        <Route exact path="/" element={<Form showAlert={showAlert} heading="Enter the text below to Analyze" mode={mode} />}/>
        <Route exact path="/about" element={<About/>}/>
        </Routes>
      </Router> */}
      <Form showAlert={showAlert} heading="Enter the text below to Analyze" mode={mode}/>
    </>
  );
}

export default App;
