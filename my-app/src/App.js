import React, { Component } from 'react';
import Clock from './components/Clock';
import Header from './components/Header';
import ButtonExample from './components/ButtonExample';


export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Clock'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <Clock />
                <ButtonExample />
            </div>
        );
    }
};
