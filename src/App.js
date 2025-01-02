import './App.css';
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Rowpost from "./components/Rowpost/Rowpost";
import {originals,action,Documentary,Romance,Horror,Comedy} from "./urls";
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Rowpost url={originals} title="Netflix Originals"/>
        <Rowpost url={action} title="Action" isSmall/>
        <Rowpost url={Documentary} title="Documentary" isSmall/>
        <Rowpost url={Romance} title="Romance" isSmall/>
        <Rowpost url={Horror} title="Horror" isSmall/>
        <Rowpost url={Comedy} title="Comedy" isSmall/>
        
    </div>
  );
}

export default App;
