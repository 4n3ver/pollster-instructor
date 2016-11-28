/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

class SearchClass extends Component {
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
                    placeholder="Search class..."/>
            </div>
        );
    }
}

SearchClass.propTypes = {
    onSearch: React.PropTypes.func.isRequired
};

SearchClass.defaultProps = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchClass);
