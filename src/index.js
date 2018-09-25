import React from "react";
import ReactDOM from "react-dom";
import Header from "./HeaderComponent"
import Project from "./ProjectComponent"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"


const Index = () => {
  return (
  	<div>
  		<Header/>
  		<Project/>
  		<Project/>
  	</div>
  )


};

ReactDOM.render(<Index />, document.getElementById("index")); 