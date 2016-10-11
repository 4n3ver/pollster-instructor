/* @flow */
"use strict";

import React, { Component } from "react";
import NewQuestionForm from "../new-question/NewQuestionForm";
import DeleteConfirmation from "./DeleteConfirmation";
import Modal from "react-modal";

class QuestionsCard extends Component {
    constructor(props) {
        super(props);
        this._bind("_renderQuestion");
        this.state = {
            newQuestionModalShown: false,
            deleteModalShown     : false
        };
    }

    _bind(...methods) {
        methods.forEach(
            method => this[method] = this[method].bind(this));
    }

    _renderQuestion(q, i) {
        return (
            <div key={i} className="question column">
                <div className="ui fluid compact basic blue button question">
                    <div onClick={() =>
                        this.setState({deleteModalShown: true})}
                        className="right floated mini circular compact ui negative icon button"
                        data-tooltip="Delete this question"
                        data-position="top right">
                        <i className="remove icon"/>
                    </div>
                    <div
                        className="right floated mini circular compact inverted ui orange icon button"
                        data-tooltip="Edit this question"
                        data-position="top right">
                        <i className="edit icon"/>
                    </div>
                    <div className="ui blue header" style={{margin: "0 5px"}}>
                        {q.prompt}
                    </div>
                    <div className="ui left aligned basic segment">
                        {q.options.map(
                            this._renderOption(q.answer))}
                    </div>
                    <div className="mini ui fluid inverted green button">
                        Open Question
                    </div>
                </div>
            </div>
        );
    }

    _renderOption(answer) {
        return (o, i) => {
            const key = Object.keys(o)[0];
            return (
                <div key={i}>
                    <strong>
                        {`${key.toUpperCase()}.  `}
                    </strong>{`${o[key]}  `}
                    {answer === key && <i className="icon check"/>}
                </div>
            );
        };
    }

    render() {
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
                    {this.props.questions.map(this._renderQuestion)}
                </div>
                <Modal className="ui medium active modal new-question"
                    overlayClassName="ui active dimmer"
                    isOpen={this.state.newQuestionModalShown}>
                    <NewQuestionForm
                        onCancel={() => this.setState(
                            {newQuestionModalShown: false})}/>
                </Modal>
                <Modal className="ui active small modal"
                    overlayClassName="ui active dimmer"
                    shouldCloseOnOverlayClick={true}
                    isOpen={this.state.deleteModalShown}>
                    <DeleteConfirmation
                        onCancel={() => this.setState(
                            {deleteModalShown: false})}/>
                </Modal>
            </div>
        );
    }
}

QuestionsCard.propTypes = {
    questions: React.PropTypes.array.isRequired
};

QuestionsCard.defaultProps = {};

export default QuestionsCard;
