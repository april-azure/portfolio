import React from "react";
import ReactDOM from "react-dom";
import * as Style from "./style.css"

class ProjectCard extends React.Component {
	render () {
		return (
			<div className = {Style["grid-content"]}>
				<img src="https://via.placeholder.com/380x300"/>

				<div className = {Style["grid-content-footer"]}>
					<div className = {Style["grid-content-header"]}>
						Lorem Ipusum
					</div>
					<div className = {Style["grid-content-tags"]}>
						<span className = {Style["grid-content-tag"]}>lorem</span>
					</div>
					<div className = {Style["secondary"]}>
						Individual X 2017-01-01
					</div>
				</div>
			</div>
		)
	}
}	

export default ProjectCard 