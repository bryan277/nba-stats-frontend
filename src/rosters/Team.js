import React, {Component} from "react";
import Player from "./Player";
import {Table} from "react-bootstrap";

export default class Team extends Component {

    render() {
        const team = this.props.team;
        const players = team.players.map(player => <Player key={player.personId} player={player}/>);
        return (
            <Table striped>
                <thead>
                <tr>
                    <th>{team.fullName}</th>
                </tr>
                </thead>
                <tbody>{players}</tbody>
            </Table>
        );
    }
}