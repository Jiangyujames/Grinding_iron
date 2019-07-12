import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./dits/home.css";
import readd from "./dits/read.png";
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom";
import Boy from "./views/boy";
import Girl from "./views/girl";
import publish from "./views/publish";


function App() {
  return (
    <div className="App">
      <div className="topp">
            <img className="mptieyuedu" src={readd} />
        <div>
            <Router>
                <div className="nav">
                <NavLink activeStyle={{color:"#333"}} className="navv" to={"/Boy"}>男生</NavLink>
                <NavLink activeStyle={{color:"#333"}} className="navv" to={"/Girl"}>女生</NavLink>
                <NavLink activeStyle={{color:"#333"}} className="navv" to={"/publish"}>出版</NavLink>
                </div>


                <Route></Route>
                <Route></Route>
                <Route></Route>
            </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
