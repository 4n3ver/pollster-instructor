/* @flow */
"use strict";

import { ADD_QUIZ, REMOVE_QUIZ } from "../actions/types";

export default (state = {}, action) => {
    const classId = action.payload && action.payload["class-id"];
    switch (action.type) {
        case ADD_QUIZ:
            const addSubState = Object.assign({}, state[classId], {
                [action.payload.id]: action.payload
            });
            return Object.assign({}, state, {
                [classId]: addSubState
            });
        case REMOVE_QUIZ:
            const removeSubState = Object.assign({}, state[classId]);
            delete removeSubState[action.payload.id];
            console.log(removeSubState);
            return Object.assign({}, state, {
                [classId]: removeSubState
            });
        default:
            return state;
    }
};
