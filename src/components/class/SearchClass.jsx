/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

class SearchClass extends Component {

    render() {
        return (
            <div className="ui fluid left icon input">
                <i className="search icon"></i>
                <input type="text" placeholder="Search class..."/>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchClass);
