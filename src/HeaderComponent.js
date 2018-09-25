import React from "react";
import ReactDOM from "react-dom";
import * as Style from "./style.css"
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom"

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fixed: true,
			oldScrollY: 0
		};
		this.scrollHandler = this.scrollHandler.bind(this);
	}

	componentWillMount() {
		window.addEventListener('scroll', this.scrollHandler);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll');
	}

	scrollHandler() {
		let scrollpos = window.scrollY; 
		// of scroll down
		if(scrollpos > 100 && !this.state.fixed && scrollpos > this.state.oldScrollY) {
			this.setState({
				fixed: true, 
			});
		}else if(scrollpos < 100 && this.state.fixed && scrollpos < this.state.oldScrollY) {
			this.setState({
				fixed: false,			
			})
		}
		this.setState({
			oldScrollY: scrollpos
		})
	}

	render() {

		let headerStyle = Style.header.concat(" ").concat(this.state.fixed? Style["header__fixed"]: Style["header__start"]);
		let headerSummaryStyle = this.state.fixed? Style["header-summary__fixed"]: Style["header-summary"];
		let headlineBoxStyle = this.state.fixed? Style["headline-box__fixed"]: Style["headline-box"] ;
		let posCancatStyle = this.state.fixed? Style["pos-concat__fixed"]: Style["pos-concat"];
		let posDetailStyle = this.state.fixed? Style["pos-detail__fixed"]: Style["pos-detail"];

		return (
			<div className = {headerStyle}>
				<div className = {Style.container.concat(" ").concat(Style["grid-container"])}>
					<nav className = {Style["page-nav"]}>
						<NavLink to ="/">Test</NavLink>
						<span>/</span>
						<NavLink to = "/project">Lorem</NavLink>
						<span>/</span>						
						<NavLink to = "/contact">Ipsum</NavLink>
					</nav>				
					<div className = {Style.headline}>
						<div className = {Style.name} >TEST TEST</div>
						<div className = {Style.pos}>
							<div className = {headlineBoxStyle}>
								<div className = {posDetailStyle}>SOMELONGTEST
								</div>
							</div>
							<div className = {posCancatStyle}>&#10005;</div>
							<div className = {headlineBoxStyle}>
								<div className = {posDetailStyle}>TEST	
								</div>							
							</div>
						</div> 
					</div>
					<div className = {headerSummaryStyle} >
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</div>
				
			</div>
		)
	}
}

export default Header 