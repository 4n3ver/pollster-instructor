/* @flow */
"use strict";

import React, { Component } from "react";
import { Link } from "react-router";

class Welcome extends Component {
    render() {
        const titleStyle = {fontSize: "8em"};
        const buttonIconStyle = {height: ".85em"};

        return (
            <div className="ui inverted max-height segment ">
                <div
                    className="ui max-height middle aligned center aligned grid">
                    <div className="column">
                        <h1 style={titleStyle}
                            className="ui massive inverted header">
                            Pollster</h1>
                        <h3 className="ui inverted header">Sign In With</h3>
                        <div>
                            <Link to="/classes">
                                <button className="ui big inverted button">
                                    <img style={buttonIconStyle}
                                        src="/img/gt.png"/>
                                    Georgia Tech
                                </button>
                            </Link>
                        </div>
                        <button
                            className="ui tiny right floated inverted button"
                            onClick={() => fetch(
                                "https://guarded-oasis-14876.herokuapp.com/test",
                                {mode: "cors"})
                                .then(resp => resp.text())
                                .then(data => alert(data))}>Check
                            Connection
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
