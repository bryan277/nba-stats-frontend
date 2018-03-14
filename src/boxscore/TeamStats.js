import React, {Component} from "react";
import PlayerStats from "./PlayerStats";
import {Table} from "react-bootstrap";
import styled from 'styled-components';

const ScaleTable = styled(Table)`
    font-size: 2vmin;
    width: 100%;
    white-space: nowrap;
`;


export default class TeamStats extends Component {

    playersKeys() {
        return ["POS", "#", "NAME"];
    }

    render() {
        const team = this.props.team;
        const simplePlayer = team.players[0];
        const keys = this.playersKeys().concat(Object.keys(simplePlayer.stats)).map((key, index) =>
            <th key={index}>{key}</th>);
        const stats = Object.values(team.stats).map((value, index) =>
            <td key={index}>{value}</td>);
        const playersStats = team.players.map(player => <PlayerStats
            key={player.info.personId} player={player}/>);
        return(
            <ScaleTable striped bordered condensed hover responsive>
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