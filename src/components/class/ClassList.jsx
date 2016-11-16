/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import SearchClass from "./SearchClass";
import { Link } from "react-router";
import { getClassList } from "../../actions";
import {valuesOf} from "../../utils/func";

class ClassList extends Component {
    componentDidMount() {
        this.props.getClassList(0); // teacher id is hardcoded to 0
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

    render() {
        return (
            <div>
                <SearchClass/>
                <div className="ui four stackable cards">
                    {valuesOf(this.props.classes).map(this._renderClassCard)}
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
