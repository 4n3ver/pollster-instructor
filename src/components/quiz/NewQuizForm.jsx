/* @flow */
"use strict";

import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import FormInput from "../input/FormInput";

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
    }

    render() {
        const formClass = `ui error form${this.props.processing
            ? " loading"
            : ""}`;
        return (
            <form
                onSubmit={this.props.handleSubmit(this._onSubmit)}
                className={formClass} style={{marginBottom: 20}}>
                <div className="ui segments" >
                    <div className="ui inverted segment">
                        <Field component={FormInput} name="name" type="text"
                            label="Create New Quiz"
                            placeholder="type in the quiz name here..."/>
                    </div>
                    <div className="ui inverted right aligned segment"
                        style={{paddingTop: 0}}>
                        <div className="ui compact small primary button">
                            Create
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm(
        {
            form: "new-quiz-form"
        }
    )
)(NewQuizForm);
