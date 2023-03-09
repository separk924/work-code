import React, { useState } from "react";
import '../styles.css';
import Dropdown from "../Dropdown";
import logo from "./thelogo.png";
import yoda from "./yoda.gif";
import bb8 from "./bb8.gif";

{/**
    MainFunctional() handles the images and Dropdown tag 
*/}
function MainFunctional() {

    const selectedValues = [{type: "People"}, {type: "Planets"},{type: "Starships"},{type: "Films"},{type: "Species"},{type: "Vehicles"}];

    return (
        <div className="App">
            <h1 className="header">
                <img className="bb8" src ={bb8} alt="bb8" />
                <img className="logo" src= {logo} alt="logo"/>
                <img className="yoda" src ={yoda} alt="yoda" />
            </h1>
            <div>
                <Dropdown 
                    placeHolder="Select..." 
                    options={selectedValues}>
                </Dropdown>
            </div>
        </div>
    );
}

export default MainFunctional;