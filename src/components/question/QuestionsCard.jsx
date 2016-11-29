/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { initialize } from "redux-form";
import NewQuestionForm from "./NewQuestionForm";
import DeleteConfirmation from "../DeleteConfirmation";
import {
    removeQuestion,
    getQuestion,
    openQuestion,
    closeQuestion
} from "../../actions";
import { multiplechoice } from "../../utils/question";

class QuestionsCard extends Component {
    constructor(props) {
        super(props);
        this._bind("_renderQuestion", "_onQuestionDeleteConfirmed",
                   "_onQuestionDelete", "_onQuestionEdit",
                   "_renderActionButton");
        this.state = {
            newQuestionModalShown: false,
            deleteModalShown     : false,
            deleteContext        : null
        };
    }

    componentDidMount() {
        this.props.getQuestion(this.props.classId, this.props.quizId);
    }

    _bind(...methods) {
        methods.forEach(
            method => this[method] = this[method].bind(this));
    }

    _onQuestionDeleteConfirmed() {
        this.props.removeQuestion(this.state.deleteContext);
        this.setState({deleteModalShown: false});
    }

    _onQuestionDelete(q) {
        return () => {
            this.setState(
                {
                    deleteModalShown: true,
                    deleteContext   : q
                }
            );
        };
    }

    _onQuestionEdit(q) {
        return () => {
            this.props.initialize("new-question-form",
                                  multiplechoice.toForm(q));
            this.setState({newQuestionModalShown: true});
        };
    }

    _renderQuestion(q, i) {
        return (
            <div key={i} className="question column">
                <div className="ui fluid compact basic blue button question">
                    <div onClick={this._onQuestionDelete(q)}
                        className="right floated mini circular compact ui negative icon button"
                        data-tooltip="Delete this question"
                        data-position="top right">
                        <i className="remove icon"/>
                    </div>
                    <div onClick={this._onQuestionEdit(q)}
                        className="right floated mini circular compact inverted ui orange icon button"
                        data-tooltip="Edit this question"
                        data-position="top right">
                        <i className="edit icon"/>
                    </div>
                    <div className="ui blue header" style={{margin: "0 5px"}}>
                        {q.prompt}
                    </div>
                    <div className="ui left aligned basic segment">
                        {q["question-data"].options.map(
                            this._renderOption(
                                q["answer-data"]["correct-option"]))}
                    </div>
                    {this._renderActionButton(q)}
                </div>
            </div>
        );
    }

    _renderActionButton(q) {
        if (q.status === "ready") {
            return (
                <div className="mini ui fluid inverted green button"
                    onClick={() => this.props.openQuestion(q)}>
                    Open Question
                </div>
            );
        } else if (q.status === "open") {
            return (
                <div className="mini ui fluid inverted red button"
                    onClick={() => this.props.closeQuestion(q)}>
                    Close Question
                </div>
            );
        } else if (q.status === "closed") {
            return (
                <div className="mini ui fluid inverted orange button"
                    onClick={() => this.props.openQuestion(q)}>
                    Re-Open Question
                </div>
            );
        }
    }

    _renderOption(answer) {
        return (o, i) => {
            return (
                <div key={i}>
                    <strong>
                        {`${String.fromCharCode(97 + i)}.  `}
                    </strong>{`${o}  `}
                    {answer === o && <i className="icon check"/>}
                </div>
            );
        };
    }

    render() {
        const quizId = this.props.quizId;
        const classId = this.props.classId;
        const questionList = this.props.question[classId]
            && this.props.question[classId][quizId] || {};
        return (
            <div className="ui blue segment">
                <div className="ui blue label"
                    data-tooltip="This card shows all your questions"
                    data-position="top left">
                    Questions
                </div>
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
                <div className="ui two column stackable grid"
                    style={{marginTop: "20px"}}>
                    {Object.keys(questionList).map(
                        (k, i) => this._renderQuestion(questionList[k], i))}
                </div>
                <Modal className="ui medium active modal new-question"
                    overlayClassName="ui active dimmer"
                    isOpen={this.state.newQuestionModalShown}>
                    <NewQuestionForm classId={this.props.classId}
                        quizId={this.props.quizId}
                        onCancel={() => this.setState(
                            {newQuestionModalShown: false})}/>
                </Modal>
                <Modal className="ui active small modal"
                    overlayClassName="ui active dimmer"
                    shouldCloseOnOverlayClick={true}
                    isOpen={this.state.deleteModalShown}>
                    <DeleteConfirmation
                        onConfirm={() => this._onQuestionDeleteConfirmed()}
                        onCancel={() => this.setState(
                            {deleteModalShown: false})}/>
                </Modal>
            </div>
        );
    }
}

QuestionsCard.propTypes = {
    quizId : React.PropTypes.string.isRequired,
    classId: React.PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    question: state.question
});

const mapDispatchToProps = {
    removeQuestion,
    getQuestion,
    initialize,
    openQuestion,
    closeQuestion
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionsCard);
