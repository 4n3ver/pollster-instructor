/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import SearchQuiz from "./SearchQuiz";
import { Link } from "react-router";
import NewQuizForm from "./NewQuizForm";

class QuizList extends Component {
    _renderQuizSummary(data, i) {
        return (
            <div key={i} className="column">
                <div className="ui segments">
                    <div className="ui inverted segment">
                        <p>Quiz Name 25</p>
                    </div>
                    <div className="ui segment">
                        <p>Description of some sort</p>
                    </div>
                    <div className="ui horizontal segments">
                        <div className="ui segment">
                            <button className="fluid ui button">View Students
                                Grade
                            </button>
                        </div>
                        <div className="ui segment">
                            <button className="ui fluid button">Export Students
                                Grade to CSV
                            </button>
                        </div>
                    </div>
                    <div className="ui segment">
                        <Link to="/classes/1238127adkf/quizzes/1238712937192"
                            className="ui primary button fluid">View/Edit
                            Quiz</Link>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <SearchQuiz/>
                <NewQuizForm/>
                <div className="ui one column grid">
                    {this._renderQuizSummary()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuizList);
