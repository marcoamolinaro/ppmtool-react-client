import React, { Component } from 'react'
import ProjectItem from './Project/ProjectItem';

export class Dashboard extends Component {
    render() {
        return (
            <>
            <h1 className="alert alert-warning">Welcome to the Dashboard</h1>
            <ProjectItem/>
            </>
        );
    }
}

export default Dashboard;


