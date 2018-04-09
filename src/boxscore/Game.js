import React, {Component} from "react";
import {Col, Glyphicon, Grid, Row, Table, Well} from 'react-bootstrap'
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
                    <Well align="center">
                        Game <b>{game.home.team.name} - {game.away.team.name}</b> will start
                        at <b>{game.gameTime}</b>.
                    </Well>
                </Col>
            </Row>
        }
        return (
            <Grid>
                <Well>
                    <Row>
                        <Table>
                            <thead>
                            <tr>
                                <th>HOME TEAM</th>
                                <th>PTS</th>
                                <th><Glyphicon glyph="list-alt"/></th>
                                <th><Glyphicon glyph="time"/></th>
                                <th>PTS</th>
                                <th>AWAY TEAM</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td width="30%">{game.home.team.name}</td>
                                <td width="10%">{game.home.stats.PTS}</td>
                                <td width="10%">{game.quarter}</td>
                                <td width="10%">{game.clock}</td>
                                <td width="10%">{game.away.stats.PTS}</td>
                                <td width="30%">{game.away.team.name}</td>
                            </tr>
                            </tbody>
                        </Table>
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
