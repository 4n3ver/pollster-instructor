/* @flow */
"use strict";

import React, { Component } from "react";

class RangeSlider extends Component {
    constructor(props) {
        super(props);
        this._bind();
    }

    _bind(...methods) {
        methods.forEach(method => this[method] = this[method].bind(this));
    }

    render() {
        const val = this.props.input.value === ""
            ? (this.props.min + this.props.max) / 2
            : parseFloat(this.props.input.value);
        return (
            <div
                className="field">
                <label>{this.props.label}</label>
                <input
                    {...this.props.input}
                    {...this.props.attr}
                    type="range"
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                />
                <div >
                    <div className="slider-label-left">
                        {this.props.rightLabel &&
                        <strong>{`${this.props.rightLabel}: `}</strong>}
                        {(this.props.max - val).toFixed(2)}
                    </div>
                    <div className="slider-label-right">
                        {this.props.leftLabel &&
                        <strong>{`${this.props.leftLabel}: `}</strong>}
                        {val.toFixed(2)}
                    </div>
                </div>
            </div>
        );
    }
}

RangeSlider.propTypes = {
    name      : React.PropTypes.string.isRequired,
    min       : React.PropTypes.number,
    max       : React.PropTypes.number,
    step      : React.PropTypes.number,
    leftLabel : React.PropTypes.string,
    rightLabel: React.PropTypes.string,
    attr      : React.PropTypes.object
};

RangeSlider.defaultProps = {
    min : 0,
    max : 100,
    step: 1
};

export default RangeSlider;
