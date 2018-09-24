import React from "react";
import ReactDOM from "react-dom";
import * as Style from "./style.css"

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			fixed: false; 
		};
	}

	render() {
		return (
			<div className = {Style.header + " " + this.state.fixed?  Style["header"] :Style["header__fixed"]}>
				<div className = {Style.container}>
					<div className = {Style.headline}>
						<div className = {Style.name} >TEST TEST</div>
						<div className = {Style.pos}>
							<div className = {Style["headline-box__fixed"]}>
								<div className = {Style["pos-detail__fixed"]}>SOMELONGTEST
								</div>
							</div>
							<div className = {Style["pos-concat__fixed"]}>&#10005;</div>
							<div className = {Style["headline-box__fixed"]}>
								<div className = {Style["pos-detail__fixed"]}>TEST	
								</div>							
							</div>
						</div> 
					</div>
					<div className = {Style["header-summary__fixed"]} >
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</div>
			</div>
		)
	}
}

export default Header 