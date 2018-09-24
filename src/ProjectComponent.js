import React from "react";
import ReactDOM from "react-dom";
import ProjectCard from "./ProjectCardComponent"
import Style from "./style.css"

class Project extends React.Component {
	render () {
		return (
			<div>	
				<div className = {Style.container}>
					<section className = {Style.section}>
						<h3>Lorem Sumaodem</h3>
						<div className = {Style["grid-container"]}>
							<ProjectCard/>
							<ProjectCard/>
							<ProjectCard/>
						</div>
					</section>
				</div>
			</div>
		)
	}
}

export default Project 