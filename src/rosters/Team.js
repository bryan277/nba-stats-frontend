import React, {Component} from "react";
import Player from "./Player";

export default class Team extends Component {

    render() {
        const team = this.props.team;
        const players = team.players.map(player => <Player player={player}/>);
        return (
            <div>
                <thead>
                <tr key={team.teamId}>
                    <th>{team.fullName}</th>
                </tr>
                </thead>
                <tbody>{players}</tbody>
            </div>
        );
    }
}