/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

import { changeView } from "../../actions";

export default ComposedComponent => {
    class TrackView extends Component {
        componentWillMount() {
            this.props.changeView(this.props.location.pathname);
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    const mapStateToProps = (state) => ({
        isAuthenticated: state.auth.authenticated
    });

    const mapDispatchToProps = {
        changeView
    };


    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(TrackView);
};
