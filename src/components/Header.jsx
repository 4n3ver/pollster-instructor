/* @flow */
"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { signOutUser } from "../actions";

class Header extends Component {
    render() {
        return (
            <div className="ui fixed inverted menu">
                <div className="ui container">
                    <Link className="header item" to="/classes">
                        Pollster
                    </Link>
                    <div className="right menu">
                        <a onClick={this.props.signOutUser} className="item">
                            Sign out
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.authenticated
});

const mapDispatchToProps = {
    signOutUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
