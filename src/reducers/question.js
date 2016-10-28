/* @flow */
"use strict";

import { ADD_QUESTION, REMOVE_QUESTION } from "../actions/types";

export default (state = {}, action) => {
    let quizId, classId;
    if (action.payload) {
        quizId = action.payload["quiz-id"];
        classId = action.payload["class-id"];
    }
    switch (action.type) {
        case ADD_QUESTION:
            const questionState = Object.assign(
                {},
                state[classId] && state[classId][quizId],
                {[action.payload.id]: action.payload}
            );
            const quizState = Object.assign({}, state[classId], {
                [quizId]: questionState
            });
            return Object.assign({}, state, {
                [classId]: quizState
            });
        case REMOVE_QUESTION:
            const removeSubState = Object.assign({}, state[classId][quizId]);
            delete removeSubState[action.payload.id];
            return Object.assign({}, state, {
                [classId]: Object.assign({}, state[quizId], {
                    [quizId]: removeSubState
                })
            });
        default:
            return state;
    }
};
