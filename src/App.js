import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Rosters from "./rosters/Rosters";
import Gamedate from "./boxscore/Gamedate";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/rosters" component={Rosters}/>
                    <Route path="/boxscore/:date" component={Gamedate}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;