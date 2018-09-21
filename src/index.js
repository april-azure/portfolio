import React from "react";
import ReactDOM from "react-dom";
import Header from "./HeaderComponent"

const Index = () => {
  return (
  	<div>
  		<Header/>
  	</div>
  )
};

ReactDOM.render(<Index />, document.getElementById("index")); 