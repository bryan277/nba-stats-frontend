import React, {Component} from "react";
import styled from 'styled-components';

// filter: brightness(85%);

const CourtRow = styled.tr`
    background: AliceBlue
`;

export default class PlayerStats extends Component {

    playersValues(player) {
        return [player.pos, player.jersey, player.firstName + " " + player.lastName]
    }

    row(values) {
        if (this.props.player.isOnCourt) {
            return <CourtRow>{values}</CourtRow>;
        }
        return <tr>{values}</tr>
    }

    render() {
        const player = this.props.player;
        const values = Object.values(this.playersValues(player.info)).concat(Object.values(player.stats)).map((value, index) => <td key={index}>{value}</td>)
        return (
                this.row(values)
        )
    }
}

