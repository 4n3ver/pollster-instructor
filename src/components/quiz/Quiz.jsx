/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import Questions from "./Questions";
import NewQuestionModal from "./NewQuestionModal";

class Quiz extends Component {
    constructor(props) {
        super(props);
        this._bind();
        this.state = {
            newQuestionModalShown: false
        };
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
                <div className="ui blue segment">
                    <div className="ui blue label">Questions</div>
                    <div className="ui right floated compact mini buttons">
                        <button
                            onClick={() => this.setState(
                                {newQuestionModalShown: true})}
                            className="ui inverted blue button">
                            New Question
                        </button>
                        <button
                            className="ui green button">
                            Start Present
                        </button>
                    </div>
                    <Questions questions={dummyData}/>
                </div>
                <NewQuestionModal isOpen={this.state.newQuestionModalShown}
                onCancel={() => this.setState({newQuestionModalShown: false})}/>
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
