/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

class SearchQuiz extends Component {
    constructor(props) {
        super(props);
        this._bind("searchHandler");
    }

    _bind(...methods) {
        methods.forEach(
            method => this[method] = this[method].bind(this));
    }

    searchHandler(event) {
        this.props.onSearch(event.target.value.toLowerCase().trim());
    }

    render() {
        return (
            <div className="ui fluid left icon input">
                <i className="search icon"></i>
                <input type="text" onChange={this.searchHandler}
                    placeholder="Search quiz..."/>
            </div>
        );
    }
}

SearchQuiz.propTypes = {
    onSearch: React.PropTypes.func.isRequired
};

SearchQuiz.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchQuiz);
