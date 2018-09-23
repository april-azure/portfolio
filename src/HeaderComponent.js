import React from "react";
import ReactDOM from "react-dom";
import * as Style from "./style.css"

class Header extends React.Component {
	render() {
		return (
			<div className = {Style.header}>
				<div className = {Style.headline}>
					<div className = {Style.name} >LINA FANG</div>
					<div className = {Style.pos}>
						<div className = {Style["pos-detail"]}>DESIGNER</div>
						<div className = {Style["pos-concat"]}>x</div>
						<div className = {Style["pos-detail"]}>DEVELOPER</div>
					</div> 
				</div>
			</div>
		)
	}
}

export default Header 