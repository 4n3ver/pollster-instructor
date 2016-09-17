/* @flow */
"use strict";

import { CHANGE_VIEW } from "../actions/types";

export default (state = {stack: [], active: -1}, action) => {
    switch (action.type) {
        case CHANGE_VIEW:
            const i = state.stack.lastIndexOf(action.payload);
            if (i < 0) {    // new view is accessed
                return state.active === state.stack.length - 1

                    // first time, the last active view is on the top of the
                    // stack
                    ? Object.assign({}, state, {
                        stack : [...state.stack, action.payload],
                        active: state.stack.length
                    })

                    // branching, the last active view is NOT on the top
                    : Object.assign({}, state, {
                        stack : [
                            ...state.stack.slice(0, state.active + 1),
                            action.payload
                        ],
                        active: state.active + 1
                    });
            } else {
                return Object.assign({}, state, {
                    stack : [...state.stack],
                    active: i
                });
            }
        default:
            return state;
    }
};
