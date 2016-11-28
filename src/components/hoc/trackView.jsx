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
                <div>
                    <ComposedComponent {...this.props} />
                    <div className={`ui${this.props.isLoading
                    ? " active"
                    : ""} inverted dimmer`}>
                        <div className="ui large loader"></div>
                    </div>
                </div>
            );
        }
    }

    const mapStateToProps = state => ({
        active: state.view.active,
        isLoading: state.view.isLoading
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
