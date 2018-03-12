import React, {Component} from "react";
import {Table} from "react-bootstrap";
// import styled from "styled-components";
import Team from "./Team";

// const Table = (teams) => {
//     {/*<table className="table table-striped">{teams}</table>*/}
// }

// const ScaleTable = styled(Table)`
//     font-size: 4vmin;
//`;

export default class Rosters extends Component {
    constructor() {
        super();
        this.state = {
            teams: []
        };
    }

    componentDidMount() {

        fetch("http://localhost:8080/api/rosters")
            .then(response => response.json())
            .then(data => {
                this.setState({teams: data})
            })
    }

    render() {
        if (this.state.teams.length === 0) {
            return (<p>Loading...</p>);
        } else {
            var teams = this.state.teams.map(team => <Team team={team}/>);
        }
        return (<Table striped>{teams}</Table>);
        // return (<table className="table table-striped">{teams}</table>);

    }
}