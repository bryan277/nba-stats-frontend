import React, {Component} from "react";
import {Button, Well} from 'react-bootstrap'
import Game from "./Game";
import CustomNavbar from "../front/CustomNavbar";

export default class GameDate extends Component {
    constructor() {
        super();
        this.state = {
            games: []
        };
    }

    componentDidMount() {

        fetch("/api/boxscore/" + this.props.match.params.date)
            .then(response => response.json())
            .then(data => {
                this.setState({games: data.games})
            })
    }


    scoreMapping() {
        return game => {
            const homeCode = game.home.team.tricode;
            const awayCode = game.away.team.tricode;
            const homePts = game.home.stats ? game.home.stats.PTS : '0';
            const awayPts = game.away.stats ? game.away.stats.PTS : '0';
            const score = '(' + homePts + ') ' + homeCode + ' - ' + awayCode + ' (' + awayPts + ')';
            return (
                <Button block key={game.gameId} onClick={this.scrollToGame.bind(this, game.gameId)}>
                    {score}
                </Button>
            )
        }
    }

    scrollToGame(gameId, e) {
        if (this.refs[gameId]) {
            this.refs[gameId].scrollIntoView({block: 'end', behavior: 'smooth'});
        }
    }

    render() {
        if (!this.state.games || this.state.games.length === 0) {
            return (<Well>Loading...</Well>);
        }
        const games = this.state.games.map(game =>
            <div ref={game.gameId} key={game.gameId}>
                <Game key={game.gameId} game={game}/>
            </div>);
        const items = this.state.games.map(this.scoreMapping());
        return (<div>
            <CustomNavbar items={items}/>
            {games}
        </div>)
    }
}

