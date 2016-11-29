/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import SearchClass from "./SearchClass";
import { Link } from "react-router";
import { getClassList } from "../../actions";
import { valuesOf, stringContains } from "../../utils/func";

class ClassList extends Component {
    constructor(props) {
        super(props);
        this._bind("searchClass");
        this.state = {searchQuery: ""};
    }

    _bind(...methods) {
        methods.forEach(
            method => this[method] = this[method].bind(this));
    }

    componentDidMount() {
        this.props.getClassList(0); // TODO:teacher id is hardcoded to 0
    }

    _renderClassCard(data, i) {
        return (
            <Link key={i} to={`/classes/${data.crn}/quizzes`}
                className="ui link yellow card">
                <div className="content">
                    <div className="header">
                        {`${data.department} ${data.number}: ${data.title}`}
                    </div>
                    <div className="description">
                    </div>
                    <div className="extra content">
                        <div className="left floated statistic">
                            <div className="value">
                                Section <i className="hashtag icon"></i>
                            </div>
                            <div className="label">
                                {data.section}
                            </div>
                        </div>
                        <div className="right floated statistic">
                            <div className="label">
                                CRN <i className="hashtag icon"></i>
                            </div>
                            <div className="value">
                                {data.crn}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    searchClass(searchQuery) {
        this.setState({searchQuery});
    }

    render() {
        const filteredClass = valuesOf(this.props.classes).filter(
            (c, i) => stringContains(c.department.toLowerCase(), this.state.searchQuery)
            || stringContains(c.number.toLowerCase(), this.state.searchQuery)
            || stringContains(c.crn.toLowerCase(), this.state.searchQuery)
            || stringContains(c.title.toLowerCase(), this.state.searchQuery)
            || stringContains(c.section.toLowerCase(), this.state.searchQuery)
        );
        return (
            <div>
                <SearchClass onSearch={this.searchClass}/>
                <div className="ui four stackable cards">
                    {filteredClass.map(this._renderClassCard)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    classes: state.classes
});

const mapDispatchToProps = {
    getClassList
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClassList);
