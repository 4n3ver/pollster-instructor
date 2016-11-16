/* @flow */
"use strict";

import { GET_CLASSES } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case GET_CLASSES:
            const newState = {};
            action.payload.forEach(c => {
                newState[c.CRN] = {
                    department: c.Dept,
                    number    : c.Num,
                    crn       : c.CRN,
                    title     : c.Title,
                    section   : c.Section
                };
            });
            return Object.assign({}, newState);
        default:
            return state;
    }
};
