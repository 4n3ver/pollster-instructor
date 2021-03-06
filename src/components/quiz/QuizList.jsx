/* @flow */
"use strict";

import React, { Component } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { Link } from "react-router";
import DeleteConfirmation from "../DeleteConfirmation";
import SearchQuiz from "./SearchQuiz";
import NewQuizForm from "./NewQuizForm";
import { removeQuiz, getQuiz } from "../../actions";
import { valuesOf, stringContains } from "../../utils/func";

class QuizList extends Component {
    constructor(props) {
        super(props);
        this._bind("_onQuizDeleteConfirmed", "_onQuizDelete",
                   "_renderQuizSummary", "searchQuiz");
        this.state = {
            deleteModalShown: false,
            deleteContext   : null,
            searchQuery     : ""
        };
    }

    componentDidMount() {
        this.props.getQuiz(this.props.params.classId);
    }

    _bind(...methods) {
        methods.forEach(
            method => this[method] = this[method].bind(this));
    }

    _onQuizDeleteConfirmed() {
        this.props.removeQuiz(this.state.deleteContext);
        this.setState({deleteModalShown: false});
    }

    _onQuizDelete(q) {
        return () => {
            this.setState(
                {
                    deleteModalShown: true,
                    deleteContext   : q
                }
            );
        };
    }

    _renderQuizSummary(data, i) {
        return (
            <div key={i} className="column">
                <div className="ui segments">
                    <div className="ui inverted segment">
                        <div className="ui mini blue horizontal label">
                            Quiz#{data.id}
                        </div>
                        <h3 className="ui inverted header"
                            style={{
                                display: "inline-block",
                                margin : 0
                            }}>{data.name}</h3>
                        <div onClick={this._onQuizDelete(data)}
                            className="right floated mini circular compact ui negative icon button"
                            data-tooltip="Delete this quiz"
                            data-position="top right">
                            <i className="remove icon"/>
                        </div>
                    </div>
                    <div className="ui segment">
                        <button className="ui fluid button">Export Students
                                Grade to CSV
                        </button>
                    </div>
                    <div className="ui segment">
                        <Link className="ui primary button fluid"
                            to={`/classes/${this.props.params.classId}/quizzes/${data.id}/quiz`}>
                            View/Edit Quiz
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    searchQuiz(searchQuery) {
        this.setState({searchQuery});
    }

    render() {
        const classId = this.props.params.classId;
        const quizList = this.props.quizList[classId] || {};
        const filteredQuiz = valuesOf(quizList).filter(
            (quiz, i) => stringContains(quiz.name.toLowerCase(),
                                        this.state.searchQuery));
        return (
            <div>
                <SearchQuiz onSearch={this.searchQuiz}/>
                <NewQuizForm classId={classId}/>
                <div className="ui one column grid">
                    {filteredQuiz.map(this._renderQuizSummary)}
                </div>
                <Modal className="ui active small modal"
                    overlayClassName="ui active dimmer"
                    shouldCloseOnOverlayClick={true}
                    isOpen={this.state.deleteModalShown}>
                    <DeleteConfirmation
                        onConfirm={() => this._onQuizDeleteConfirmed()}
                        onCancel={() => this.setState(
                            {deleteModalShown: false})}/>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    quizList: state.quiz
});

const mapDispatchToProps = {
    removeQuiz,
    getQuiz
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuizList);
