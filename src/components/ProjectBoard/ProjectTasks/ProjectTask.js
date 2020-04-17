import React, { Component } from "react";

class ProjectTask extends Component {
  render() {
    const { project_task } = this.props;
    let priorityString;
    let priorityClass;

    if (project_task.priority === 1) {
      priorityClass = "bg-danger text-ligh";
      priorityString = "HIGH";
    } else if (project_task.priority === 2) {
      priorityClass = "bg-warning text-ligh";
      priorityString = "MEDIUM";      
    } else {
      priorityClass = "bg-info text-ligh";
      priorityString = "LOW";         
    }

    return (
      <div className="card mb-1 bg-light">
        <div className={`card-header text-white ${priorityClass}`}>
          ID: {project_task.projectSequence} -- Priority: {priorityString}
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{project_task.summary}</h5>
          <p className="card-text text-truncate ">
            {project_task.acceptanceCriteria}
          </p>
          <a href="" className="btn btn-primary">
            View / Update
          </a>

          <button className="btn btn-danger ml-4">Delete</button>
        </div>
      </div>
    );
  }
}

export default ProjectTask;
