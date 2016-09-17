/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import SearchClass from "./SearchClass";
import { Link } from "react-router";

class ClassList extends Component {
    _renderClassCard(data, i) {
        return (
            <Link key={i} to={`/classes/1238127adkf${data}/quizzes`}
                className="ui link yellow card">
                <div className="content">
                    <div className="header">
                        ECC 1333
                    </div>
                    <div className="description">
                    </div>
                    <div className="extra content">
                        <div className="left floated statistic">
                            <div className="value">
                                <i className="users icon"></i> 325
                            </div>
                            <div className="label">
                                Joined
                            </div>
                        </div>
                        <div className="right floated statistic">
                            <div className="label">
                                class <i className="hashtag icon"></i>
                            </div>
                            <div className="value">
                                HIJ123
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <SearchClass/>
                <div className="ui four stackable cards">
                    {[1,2].map(this._renderClassCard)}
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
)(ClassList);
