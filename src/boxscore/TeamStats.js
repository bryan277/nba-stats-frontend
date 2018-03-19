import React, {Component} from "react";
import PlayerStats from "./PlayerStats";
import {Table} from "react-bootstrap";
import styled from 'styled-components';

const ScaleTable = styled(Table)`
    font-size: 1.5vmin;
`;


export default class TeamStats extends Component {

    constructor(props) {
        super();
        this.state = {
            players: props.team.players
        }
    }

    playersKeys() {
        return ["POS", "#", "NAME"];
    }

    sortPlayers(key, e) {
        const players = this.state.players.sort((p1,p2) => p2.stats[key] - p1.stats[key]);
        this.setState({players});
    }

    render() {
        const team = this.props.team;
        const simplePlayer = team.players[0];
        const keys = this.playersKeys().concat(Object.keys(simplePlayer.stats)).map((key) =>
            <th key={key} onClick={this.sortPlayers.bind(this, key)}>{key}</th>);
        const stats = Object.values(team.stats).map((value, index) =>
            <td key={index}>{value}</td>);
        const playersStats = this.state.players.map((player, index) =>
            <PlayerStats
                key={player.info.personId}
                player={player}
            />);
        return (
            <ScaleTable bordered condensed hover responsive>
                <thead>
                <tr>{keys}</tr>
                </thead>
                <tbody>
                {playersStats}
                <tr>
                    <td colSpan={3}></td>
                    {stats}
                </tr>
                </tbody>
            </ScaleTable>
        );
    }
}

// striped, hover