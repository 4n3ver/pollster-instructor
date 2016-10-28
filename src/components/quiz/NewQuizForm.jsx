/* @flow */
"use strict";

import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import FormInput from "../input/FormInput";
import { addQuiz } from "../../actions";
import { required } from "../../utils/form-validator";

class NewQuizForm extends Component {
    constructor(props) {
        super(props);
        this._bind("_onSubmit");
    }

    _bind(...methods) {
        methods.forEach(
            method => this[method] = this[method].bind(this));
    }

    _onSubmit(payload) {
        this.props.addQuiz(this.props.classId, payload.name);
        this.props.reset();
    }

    render() {
        const formClass = `ui error form${this.props.processing
            ? " loading"
            : ""}`;
        return (
            <form
                onSubmit={this.props.handleSubmit(this._onSubmit)}
                className={formClass} style={{marginBottom: 10}}>
                <div className="ui segments">
                    <div className="ui inverted segment">
                        <Field component={FormInput} name="name" type="text"
                            label="Create New Quiz"
                            placeholder="type in the quiz name here..."/>
                    </div>
                    <div className="ui inverted right aligned segment"
                        style={{paddingTop: 0}}>
                        <button type="submit"
                            className="ui compact small primary button"
                            disabled={this.props.invalid
                            || this.props.submitting}>
                            Create
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

NewQuizForm.propTypes = {
    classId: React.PropTypes.string.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    addQuiz
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm(
        {
            validate: required("name"),
            form    : "new-question-form"
        }
    )
)(NewQuizForm);
