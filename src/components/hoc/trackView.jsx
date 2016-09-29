/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import { changeView, buildStack } from "../../actions";

export default ComposedComponent => {
    class TrackView extends Component {
        componentWillMount() {
            if (this.props.active === -1) {
                // TODO: need to somehow build the stack
                this.props.buildStack(this.props.location.pathname);
            } else {
                this.props.changeView(this.props.location.pathname);
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    const mapStateToProps = (state) => ({
        active: state.view.active
    });

    const mapDispatchToProps = {
        changeView,
        buildStack
    };

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(TrackView);
};
