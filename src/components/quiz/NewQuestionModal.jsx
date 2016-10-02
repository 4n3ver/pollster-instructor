/* @flow */
"use strict";

import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Modal from "react-modal";
import FormInput, { required } from "../input/FormInput";

class NewQuestionModal extends Component {
    constructor(props) {
        super(props);
        this._bind("_onSubmit");
    }

    _bind(...methods) {
        methods.forEach(
            method => this[method] = this[method].bind(this));
    }

    _onSubmit({vin, brand, origin, destination}) {
    }

    _renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="ui error message">
                    <div className="header">Oops!</div>
                    {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const formClass = `ui ${this.props.processing
            ? " loading"
            : ""} error form`;
        return (
            <Modal
                className="ui medium active modal"
                overlayClassName="ui active dimmer"
                isOpen={this.props.isOpen}>
                <div className="ui raised segments">
                    <div className="ui segment">
                        <div className="ui header">New Question</div>
                    </div>
                    <div className="ui segment">
                        <form
                            onSubmit={this.props.handleSubmit(this._onSubmit)}
                            className={formClass}>
                            <Field
                                component={FormInput}
                                name="Well Are you?"
                                type="text"
                                label="Origin"
                                placeholder="NOOO"/>
                            {this._renderAlert()}
                            <button type="submit"
                                disabled={!this.props.valid
                                || this.props.submitting}
                                className="ui fluid primary button">
                                Set Route
                            </button>
                        </form>
                    </div>
                    <div className="ui right aligned compact segment">
                        <div className="ui small button"
                            onClick={this.props.onCancel}>Cancel
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}

NewQuestionModal.propTypes = {
    isOpen  : React.PropTypes.bool.isRequired,
    onCancel: React.PropTypes.func.isRequired
};

NewQuestionModal.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

const validateForm = values => {
    const errors = required()(values);
    return errors;
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm(
        {
            form    : "new-question-form",
            validate: validateForm
        }
    )
)(NewQuestionModal);
