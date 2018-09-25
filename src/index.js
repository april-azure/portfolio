import React from "react";
import ReactDOM from "react-dom";
import Header from "./HeaderComponent"
import Project from "./ProjectComponent"
import ProjectDetail from "./ProjectDetailComponent"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Footer from "./FooterComponent" 

const Index = () => {
  return (
  	<Router>
	  	<div>
	  		<Header/>
	  		<Switch>
		  		<Route path="/" render = {() => (<ProjectDetail/>)}/>
		  		<Route path="/" component = {Home}/>
		  		<Route component = {Home}/>
		  	</Switch>
		  	<Footer/>
	  	</div>
	</Router>
  )
};

const Home = () => (
	<div>
		<Project/>
		<Project/>
	</div>
)

ReactDOM.render(<Index />, document.getElementById("index")); 