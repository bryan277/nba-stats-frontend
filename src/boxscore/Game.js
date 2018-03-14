import React, {Component} from "react";
import {Col, Grid, Row, Well} from 'react-bootstrap'
import TeamStats from "./TeamStats";

export default class Game extends Component {

    playersKeys() {
        return ["POS", "#", "NAME"];
    }

    render() {
        const game = this.props.game;
        if (game.home.players.length === 0) {
            return <Row>
                <Col lg={12}>
                    <Well align="center">Game {game.home.team} - {game.away.team} not prepared.</Well>
                </Col>
            </Row>
        }
        return (
            <Grid>
                <Well>
                    <Row>
                        <b>
                            <Col align="center" lg={4}>HOME TEAM</Col>
                            <Col align="center" lg={1}>PTS</Col>
                            <Col align="center" lg={1}>QUARTER</Col>
                            <Col align="center" lg={1}>TIME</Col>
                            <Col align="center" lg={1}>PTS</Col>
                            <Col align="center" lg={4}>AWAY TEAM</Col>
                        </b>
                    </Row>
                    <Row>
                        <Col align="center" lg={4}>{game.home.team}</Col>
                        <Col align="center" lg={1}>{game.home.stats.PTS}</Col>
                        <Col align="center" lg={1}>{game.period}</Col>
                        <Col align="center" lg={1}>{game.clock}</Col>
                        <Col align="center" lg={1}>{game.away.stats.PTS}</Col>
                        <Col align="center" lg={4}>{game.away.team}</Col>
                    </Row>
                </Well>
                <Row>
                    <Col lg={6}>
                        <TeamStats team={game.home}/>
                    </Col>
                    <Col lg={6}>
                        <TeamStats team={game.away}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
