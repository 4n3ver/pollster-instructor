/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

class Quiz extends Component {

    render() {
        return (
            <div>
                <h1 className="ui header">ECC 1333</h1>
                <h1 className="ui medium header">Burdell, George</h1>
                <div className="ui blue segment">
                    <div className="ui blue label">Questions</div>
                    <button
                        className="ui tiny green inverted right floated button">
                        Start Present
                    </button>
                    <div className="ui two column equal width stackable grid">

                    </div>
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
)(Quiz);
