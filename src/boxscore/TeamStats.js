import React, {Component} from "react";
import PlayerStats from "./PlayerStats";
import {Table} from "react-bootstrap";
import {List} from "immutable";
import styled from 'styled-components';
import playerComparator from '../logic/sort'

const ScaleTable = styled(Table)`
    font-size: 1.5vmin;
`;

export default class TeamStats extends Component {

    constructor(props) {
        super();
        this.state = {
            players: List(props.team.players),
            sortKey: ''
        }
    }

    playersKeys() {
        return ["POS", "#", "NAME"];
    }

    sortPlayers(key, e) {
        let players = this.state.players;
        if (key === 'POS') {
            players = this.props.team.players;
        } else if (this.state.sortKey === key) {
            players = this.state.players.reverse();
        } else {
            players = this.state.players.sort(playerComparator(key));
        }
        this.setState({
            players: players,
            sortKey: key
        });
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
                    <td colSpan={3} align="center">TOTAL</td>
                    {stats}
                </tr>
                </tbody>
            </ScaleTable>
        );
    }
}