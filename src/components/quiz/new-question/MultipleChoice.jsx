/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import FormInput from "../../input/FormInput";

class MultipleChoice extends Component {
    constructor(props) {
        super(props);
        this._bind("_renderMultipleChoiceFields", "_removeOption",
                   "_markCorrectOption", "_addOption");
    }

    _bind(...methods) {
        methods.forEach(
            method => this[method] = this[method].bind(this));
    }

    _addOption() {
        this.props.array.push("options", "");
    }

    _markCorrectOption(i) {
        this.props.change("correct", i);
    }

    _removeOption(i) {
        const values = this.props.formState[this.props.form].values;
        if (values.options.length > 2) {
            this._markCorrectOption(i % (values.options.length - 1));
            this.props.array.remove("options", i);
        }
    }

    _renderMultipleChoiceFields(d, i) {
        const correct = this.props.formState[this.props.form].values.correct;
        return (
            <div key={i}>
                <Field
                    component={FormInput}
                    name={`options[${i}]`}
                    type="text"
                    placeholder="type in the option here...">
                    <div className={`ui compact icon button${correct === i
                        ? " green"
                        : ""}`}
                        data-tooltip="Mark this option as correct"
                        data-position="top right"
                        onClick={() => this._markCorrectOption(i)}>
                        <i className="checkmark icon"/>
                    </div>
                    <div className="ui compact red icon button"
                        data-tooltip="Remove this option"
                        data-position="top right"
                        onClick={() => this._removeOption(i)}>
                        <i className="remove icon"/>
                    </div>
                </Field>
            </div>
        );
    }

    componentWillMount() {
        this.props.change("correct", 0);
        this._addOption();
        this._addOption();
    }

    render() {
        const options = this.props.formState[this.props.form].values.options;
        return (
            <div>
                <div><strong>Options</strong></div>
                {options && options.map(this._renderMultipleChoiceFields)}
                <div style={{marginTop: "5px"}}
                    className="ui mini fluid circular inverted blue button"
                    onClick={this._addOption}>
                    Add more options
                </div>
            </div>
        );
    }
}

MultipleChoice.propTypes = {};

MultipleChoice.defaultProps = {};

MultipleChoice.validateForm = (values, errors = {}) => {
    const options = values.options || new Array(2).fill("");
    errors.options = options.map(
        v => v === void 0 || v.trim && v.trim().length === 0
            ? "Required!"
            : null);
    return errors;
};

const mapStateToProps = state => ({
    formState: state.form
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MultipleChoice);
