/* @flow */
"use strict";

import { ADD_QUESTION, REMOVE_QUESTION } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            return Object.assign({}, state, {
                questions: Object.assign({}, state.questions, {
                    [action.payload["quiz-id"]]: action.payload
                })
            });
        case REMOVE_QUESTION:
            const questions = Object.assign({}, state.questions);
            delete questions[action.payload];
            return Object.assign({}, state, {questions});
        default:
            return state;
    }
};
