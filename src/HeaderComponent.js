import React from "react";
import ReactDOM from "react-dom";
import * as Style from "./style.css"

class Header extends React.Component {
	render() {
		return (
			<div className = {Style.header}>
				<div className = {Style.headline}>
					<div className = {Style.name} >TEST TESTING</div>
					<div className = {Style.pos}>
						<div className = {Style["pos-detail"]} >SOMETESTS</div>
						<div className = {Style["pos-detail"]} >ANOTHER</div>
					</div> 
				</div>
			</div>
		)
	}
}

export default Header 