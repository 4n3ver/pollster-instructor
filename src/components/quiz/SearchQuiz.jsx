/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

class SearchQuiz extends Component {

    render() {
        return (
            <div className="ui fluid left icon input">
                <i className="search icon"></i>
                <input type="text" placeholder="Search quiz..."/>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchQuiz);
