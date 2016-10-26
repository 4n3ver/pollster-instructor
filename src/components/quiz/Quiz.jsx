/* @flow */
"use strict";

import React, { Component } from "react";
import QuestionsCard from "./questions/QuestionsCard";

class Quiz extends Component {
    constructor(props) {
        super(props);
        this._bind();
        this.state = {};
    }

    _bind(...methods) {
        methods.forEach(
            method => this[method] = this[method].bind(this));
    }

    render() {
        return (
            <div>
                <h1 className="ui header">ECC 1333</h1>
                <h1 className="ui medium header">Burdell, George</h1>
                <QuestionsCard/>
            </div>
        );
    }
}

export default Quiz;
