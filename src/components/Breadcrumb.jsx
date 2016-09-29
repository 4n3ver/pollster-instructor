/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

class Breadcrumb extends Component {
    constructor(props) {
        super(props);
        this._bind("_renderSection");
    }

    _bind(...methods) {
        methods.forEach(
            method => this[method] = this[method].bind(this));
    }

    _renderSection(section, i) {
        let crumb;
        if (i === this.props.activeView) {
            crumb = (<span className="active section">{section.name}</span>);
        } else {
            crumb = (
                <span className="section">
                    <Link to={section.path}>{section.name}</Link>
                </span>
            );
        }
        return (
          <span key={i}>
              {i !== 0 &&  <i className="right angle icon divider"></i>}
              {crumb}
          </span>
        );
    }

    render() {
        return (
            <div>
                <div className="ui mini breadcrumb">
                    {this.props.viewStack.map(this._renderSection)}
                </div>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    viewStack : state.view.stack,
    activeView: state.view.active
});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Breadcrumb);
