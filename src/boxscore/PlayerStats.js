import React, {Component} from "react";

export default class PlayerStats extends Component {

    playersValues(player) {
        return [player.pos, player.jersey, player.firstName + " " + player.lastName]
    }

    render() {
        const player = this.props.player;
        const values = Object.values(this.playersValues(player.info)).concat(Object.values(player.stats)).map((value, index) => <td key={index}>{value}</td>)
        return (
                <tr>{values}</tr>
        )
    }
}

