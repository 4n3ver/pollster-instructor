/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import {getQuiz} from "../../actions";
import QuestionsCard from "../question/QuestionsCard";


class Quiz extends Component {
    constructor(props) {
        super(props);
        this._bind();
        this.state = {};
    }

    componentWillMount() {
        const classId = this.props.params.classId;
        if (!this.props.quizList[classId]) {
            this.props.getQuiz(classId);
        }
    }

    _bind(...methods) {
        methods.forEach(
            method => this[method] = this[method].bind(this));
    }

    render() {
        const classId = this.props.params.classId;
        const quizId = this.props.params.quizzesId;
        const quizList = this.props.quizList[classId];
        return (
            <div>
                <h1 className="ui header">
                    {quizList && quizList[quizId].name}
                </h1>
                <h1 className="ui medium header">Burdell, George</h1>
                <QuestionsCard classId={classId} quizId={quizId}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    quizList: state.quiz
});

const mapDispatchToProps = {
    getQuiz
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Quiz);
