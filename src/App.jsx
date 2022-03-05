import "./App.css";
import React from "react";
import {Header} from "./Components/Header/Header"
import {Main} from "./Components/Main/Main"
import {Footer} from "./Components/Footer/Footer"
import Content from "./Components/Content/Content"
import {Modal} from "./Components/Modal/Modal"
import {Count} from "./Components/Form/Count"
function App() {
      const [toggle,setToggle] = React.useState(false)
  return(
     <div className="App">
       
        <button onClick={()=>setToggle((prev)=>!prev)} >Counter</button>
        {toggle && <Count/> }
     </div>
  )
}
export default App;
