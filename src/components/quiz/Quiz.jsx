/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionsCard from "./questions-card/QuestionsCard";

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
        const dummyData = new Array(7).fill(
            {
                type   : "",
                prompt : "You are new. Right? HAH? ZZZZZ. Who are you?",
                answer : "a",
                options: [
                    {a: "George"},
                    {b: "Burdell"},
                    {c: "George Burdell"},
                    {d: "George P. Burdell"},
                    {e: "I forgot!"}
                ],
                weight : 0
            }
        );
        return (
            <div>
                <h1 className="ui header">ECC 1333</h1>
                <h1 className="ui medium header">Burdell, George</h1>
                <QuestionsCard questions={dummyData}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Quiz);
