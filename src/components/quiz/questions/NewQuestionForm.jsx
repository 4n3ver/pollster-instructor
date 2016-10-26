/* @flow */
"use strict";

import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import FormInput from "../../input/FormInput";
import RangeSlider from "../../input/RangeSlider";
import MultipleChoice from "./MultipleChoice";
import { addQuestion } from "../../../actions";
import { multiplechoice } from "../../../utils/questions";
import { required } from "../../../utils/form-validator";

class NewQuestionForm extends Component {
    constructor(props) {
        super(props);
        this._bind("_onSubmit", "_onCancel");
    }

    _bind(...methods) {
        methods.forEach(
            method => this[method] = this[method].bind(this));
    }

    _onSubmit(payload) {
        this.props.addQuestion(multiplechoice.fromForm(payload));
        this._onCancel();
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

    _onCancel() {
        this.props.onCancel();
        this.props.reset();
        this.props.change("participation-weight", 0);
    }

    componentWillMount() {
        this.props.change("participation-weight", 0);
    }

    render() {
        const formClass = `ui error form${this.props.processing
            ? " loading"
            : ""}`;
        return (
            <form
                onSubmit={this.props.handleSubmit(this._onSubmit)}
                className={formClass}>
                <div className="ui raised segments">
                    <div className="ui segment">
                        <div className="ui header">New Question</div>
                    </div>
                    <div className="ui segment">
                        <Field component={FormInput} name="prompt" type="text"
                            label="Question"
                            placeholder="type in the question prompt here..."/>
                        <div className="two fields">
                            <Field component={FormInput} name="max-score"
                                type="number" label="Max Score"
                                placeholder="enter max score for this question..."
                                attr={{
                                    min : 0,
                                    step: .1
                                }}/>
                            <Field component={RangeSlider}
                                name="participation-weight"
                                label="Weight" rightLabel="Correctness"
                                leftLabel="Participation"
                                min={0} max={1} step={.01}/>
                        </div>
                        {this.props.formState &&
                        <MultipleChoice {...this.props}/>}
                        {this._renderAlert()}
                    </div>
                    <div className="ui right aligned compact segment">
                        <button type="submit" disabled={this.props.invalid
                        || this.props.submitting}
                            className="ui small primary button">
                            Add Question
                        </button>
                        <div className="ui small button"
                            onClick={this._onCancel}>Cancel
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

NewQuestionForm.propTypes = {
    onCancel: React.PropTypes.func.isRequired
};

NewQuestionForm.defaultProps = {};

const mapStateToProps = state => ({
    formState: state.form["new-question-form"]
});

const mapDispatchToProps = {
    addQuestion
};

const validateForm = (values, props) => {
    return MultipleChoice.validateForm(
        values, required("prompt", "max-score")(values, props));
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
)(NewQuestionForm);
