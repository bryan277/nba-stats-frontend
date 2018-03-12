import React, {Component} from "react";
import {Col, Grid, Row, Table} from 'react-bootstrap'
import styled from 'styled-components';
import PlayerStats from './PlayerStats'

const ScaleTable = styled(Table)`
    font-size: 2vmin;
    width: 100%;
    white-space: nowrap;
`;


export default class Game extends Component {

    playersKeys() {
        return ["POS", "#", "NAME"];
    }

    render() {
        const game = this.props.game;
        if (game.home.players.length === 0) {
            return <Row>
                <Col lg={12}>
                    <p align="center">Game {game.home.team} - {game.away.team} not prepared.</p>
                </Col>
            </Row>
        }
        const homePlayersStats = game.home.players === null ? "" : game.home.players.map(player => <PlayerStats
            player={player}/>);
        const awayPlayersStats = game.away.players === null ? "" : game.away.players.map(player => <PlayerStats
            player={player}/>);
        const simplePlayer = homePlayersStats[0].props.player;
        const keys = this.playersKeys().concat(Object.keys(simplePlayer.stats)).map(key =>
            <th>{key}</th>)
        return (
            <Row>
                <Grid>
                    <Row>
                        <Col lg={5}>{game.home.team}</Col>
                        <Col lg={1}>{game.home.stats.PTS}</Col>
                        <Col lg={1}>{game.away.stats.PTS}</Col>
                        <Col lg={5}>{game.away.team}</Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <ScaleTable striped bordered condensed hover responsive>
                                <thead>
                                <tr>{keys}</tr>
                                </thead>
                                <tbody>
                                {homePlayersStats}
                                </tbody>
                            </ScaleTable>
                        </Col>
                        <Col lg={6}>
                            <ScaleTable striped bordered condensed hover responsive>
                                <thead>
                                <tr>{keys}</tr>
                                </thead>
                                <tbody>
                                {awayPlayersStats}
                                </tbody>
                            </ScaleTable>
                        </Col>
                    </Row>
                </Grid>
            </Row>
        )
    }
}
