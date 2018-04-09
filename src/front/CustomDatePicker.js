import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {darkBlack, grey200, grey300} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: darkBlack,
        primary2Color: grey300,
        alternateTextColor: darkBlack,
        pickerHeaderColor: grey200,
    }
});

export class CustomDatePicker extends Component {

    constructor() {
        super();
        this.openDatePicker = this.openDatePicker.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            date: '',
        };
    }

    componentDidMount() {
        this.props.showDatePicker(this.openDatePicker);
    }

    openDatePicker() {
        this.refs.datepicker.openDialog();
    };

    handleChange(e, date) {
        this.setState({date: this.convertDate(date)});
        window.location = `/boxscore/${this.state.date}`;
    }

    convertDate(date) {
        return date.getFullYear() + "" + this.addZero(date.getMonth() + 1) + "" + this.addZero(date.getDate());
    }

    addZero(digit) {
        if (digit < 10)
            return '0' + digit;
        return digit
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <DatePicker
                    name='CustomDatePicker'
                    autoOk
                    container="inline"
                    onChange={this.handleChange}
                    textFieldStyle={{display: 'none'}}
                    ref='datepicker'
                />
            </MuiThemeProvider>
        )
    }
}