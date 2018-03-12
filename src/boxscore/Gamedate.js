import React, {Component} from "react";
import {Grid} from 'react-bootstrap'
import Game from "./Game";

export default class Gamedate extends Component {
    constructor() {
        super();
        this.state = {
            games: []
        };
    }

    componentDidMount() {

        fetch("http://localhost:8080/api/boxscore/" + this.props.match.params.date)
            .then(response => response.json())
            .then(data => {
                this.setState({games: data.games})
            })
    }

    render() {
        if (this.state.games.length === 0) {
            return (<p>Loading...</p>);
        }
        let games = this.state.games.map(game => <Game game={game}/>);
        return (<Grid>
            {games}
        </Grid>)
    }
}

