import React, { Component } from 'react'


class ProjectCard extends Component {

  expandProjectText = () => {
  	const card = document.getElementById(`project-num-${this.props.project.id}`);
    card.style.height = card.scrollHeight+'px';
  }

  collapseProjectText = () => {
  	const card = document.getElementById(`project-num-${this.props.project.id}`);
    card.style.height = null;
  }

	render() {
    const p = this.props.project;
    
		return (
      <div id={ 'project-num-'+ p.id } className="project-card" onMouseEnter={this.expandProjectText} onMouseLeave={this.collapseProjectText}>
        <div className="face1">
          <img src={p.img_url} alt="Project Pic" className="project-image"/>
        </div>
        <div className="face2">
          <div className='padding-container'>
            <a href={p.project_url}><h4>{p.name}</h4></a>
            <div className='project-text'>
              <p>{p.description}</p>
              { p.credentials     && <div className="credentials">{p.credentials}</div> }
              { p.github_frontend && <a href={p.github_frontend}>GitHub frontend</a> }
              { p.github_frontend && p.github_backend && <span>&nbsp; | &nbsp;</span> }
              { p.github_backend  && <a href={p.github_backend}>GitHub backend</a> }
            </div>
          </div>
        </div>
      </div>
		)
	}
}

export default ProjectCard;
