import React, {Component} from "react";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

export default class PlayerStats extends Component {

    playersValues(player) {
        return [player.pos, player.jersey, this.shortPlayerName(player)]
    }

    shortPlayerName(player) {
        let firstName = player.firstName;
        if (!firstName.includes('.')) {
            firstName = firstName[0] + '.';
        }
        return firstName + " " + player.lastName;
    }

    fullPlayerName(player) {
        return player.firstName + ' ' + player.lastName;
    }

    row(values) {
        if (this.props.player.isOnCourt) {
            return <tr bgcolor="#87cefa">{values}</tr>;
        }
        return <tr>{values}</tr>
    }

    playerMapping() {
        const player = this.props.player.info;
        const fullName = this.fullPlayerName(player);
        const tooltip = <Tooltip id={player.personId}>{fullName}</Tooltip>;
        return (value, index) => {
            if (index === 2) {
                return <OverlayTrigger key={index} placement="top" overlay={tooltip}>
                    <td key={index}>{value}</td>
                </OverlayTrigger>
            }
            return (
                <td key={index}>{value}</td>
            )
        }
    }

    render() {
        const player = this.props.player;
        const values = Object.values(this.playersValues(player.info)).concat(Object.values(player.stats)).map(this.playerMapping());
        return (
            this.row(values)
        )
    }
}

