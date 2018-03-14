import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Rosters from "./rosters/Rosters";
import GameDate from "./boxscore/GameDate";
import {FrontPage} from "./front/FrontPage";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={FrontPage}/>
                    <Route path="/rosters" component={Rosters}/>
                    <Route path="/boxscore/:date" component={GameDate}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;