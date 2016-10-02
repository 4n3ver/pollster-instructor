/* @flow */
"use strict";

import { CHANGE_VIEW, BUILD_VIEW_STACK } from "../actions/types";

export default (state = {
    stack : [],
    active: -1
}, action) => {
    switch (action.type) {
        case CHANGE_VIEW:
            const found = state.stack.reduce(
                (acc, e, i) =>
                    e.name === action.payload.name
                        ? i
                        : acc,
                -1
            );
            if (found === -1) {    // new view is accessed
                // first time
                return Object.assign({}, state, {
                    stack : [...state.stack, action.payload],
                    active: state.stack.length
                });
            } else {
                return state.stack[found].path === action.payload.path
                    ? // go back, name and path are the same
                       Object.assign({}, state, {
                           stack : state.stack,
                           active: found
                       })
                    : // branching, name of the path is the same
                       Object.assign({}, state, {
                           stack : [
                               ...state.stack.slice(0, found),
                               action.payload
                           ],
                           active: found
                       });
            }
        case BUILD_VIEW_STACK:
            return Object.assign({}, state, {
                stack : action.payload,
                active: action.payload.length - 1
            });
        default:
            return state;
    }
};
