import React, {Component} from "react";
import {Grid, Well} from "react-bootstrap";
import Team from "./Team";

export default class Rosters extends Component {
    constructor() {
        super();
        this.state = {
            teams: []
        };
    }

    componentDidMount() {

        fetch("/api/rosters")
            .then(response => response.json())
            .then(data => {
                this.setState({teams: data})
            })
    }

    render() {
        if (this.state.teams.length === 0) {
            return (<Well>Loading...</Well>);
        }
        let teams = this.state.teams.map(team => <Team key={team.fullName} team={team}/>);
        return (
            <Grid>
                {teams}
            </Grid>
        );

    }
}