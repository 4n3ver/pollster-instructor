/* @flow */
"use strict";

import React, { Component } from "react";
import Modal from "react-modal";

class Questions extends Component {
    constructor(props) {
        super(props);
        this._bind("_renderQuestion");
        this.state = {
            deleteModalShown: false
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
                        <i className="edit icon"></i>
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
                    {answer === key && <i className="icon check"></i>}
                </div>
            );
        };
    }

    render() {
        return (
            <div className="ui two column stackable grid"
                style={{marginTop: "20px"}}>
                {this.props.questions.map(this._renderQuestion)}
                <Modal className="ui active small modal"
                    overlayClassName="ui active dimmer"
                    shouldCloseOnOverlayClick={true}
                    isOpen={this.state.deleteModalShown}>
                    <div className="ui fluid card">
                        <div className="content">
                            <div className="center aligned header">
                                Are you sure?
                            </div>
                        </div>
                        <div className="extra content">
                            <div className="ui two buttons">
                                <div className="ui red basic button">
                                    Delete
                                </div>
                                <div className="ui green basic button"
                                    onClick={() => this.setState(
                                        {deleteModalShown: false})}>
                                    Cancel
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

Questions.propTypes = {
    questions: React.PropTypes.array.isRequired
};

Questions.defaultProps = {};

export default Questions;
