import React from "react";
import ReactDOM from "react-dom";
import Header from "./HeaderComponent"
import Project from "./ProjectComponent"

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