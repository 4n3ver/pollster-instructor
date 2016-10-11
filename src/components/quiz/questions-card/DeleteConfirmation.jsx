/* @flow */
"use strict";

import React, { Component } from "react";

class DeleteConfirmation extends Component {
    constructor(props) {
        super(props);
        this._bind();
    }

    _bind(...methods) {
        methods.forEach(
            method => this[method] = this[method].bind(this));
    }

    render() {
        return (
            <div className="ui fluid card">
                <div className="content">
                    <div className="center aligned header">
                        Are you sure?
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui red basic button">
                            Delete
                        </div>
                        <div className="ui green basic button"
                            onClick={this.props.onCancel}>
                            Cancel
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

DeleteConfirmation.propTypes = {
    onCancel: React.PropTypes.func.isRequired
};

DeleteConfirmation.defaultProps = {};

export default DeleteConfirmation;
