import React, { Component } from 'react'

export default class Temperature extends Component {

    state = {
        temperature: ""
    }

    getWeatherMessage = (temp) => {
        if (temp < 10) {return "its cold ❄️"}
        else if (temp >= 10 && temp <= 30) {return "It's nice 🌼"}
        else {return "It's warm ☀️"}
    };

    handleInput = e => {
        this.setState({
            temperature : e.target.value
        });
    };

    render() {
        const temp = this.state.temperature;
        return (
            <div>
                <h1>Temperature</h1>
                <input
                type="text"
                name="temperature"
                placeholder="Temperature in C°"
                onInput={this.handleInput}
                />
               <div>{temp !== "" && this.getWeatherMessage(temp)}</div>
            </div>
        );
    }
}
