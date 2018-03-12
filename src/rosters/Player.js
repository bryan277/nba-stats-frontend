import React, {Component} from "react";

export default class Player extends Component {
    
    render() {
        const player = this.props.player;
        return (<tr key={player.personId}>
            <td>{player.pos}</td>
            <td>{player.jersey}</td>
            <td>{player.firstName}</td>
            <td>{player.lastName}</td>
        </tr>);
    }
}
