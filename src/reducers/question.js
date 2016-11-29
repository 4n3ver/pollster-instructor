/* @flow */
"use strict";

import {
    ADD_QUESTION,
    REMOVE_QUESTION,
    OPEN_QUESTION,
    CLOSE_QUESTION
} from "../actions/types";

export default (state = {}, action) => {
    let quizId, classId;
    if (action.payload) {
        quizId = action.payload["quiz-id"];
        classId = action.payload["class-id"];
    }
    switch (action.type) {
        case ADD_QUESTION:
            return Object.assign({}, state, {
                [classId]: Object.assign({}, state[classId], {
                    [quizId]: Object.assign({},
                                            state[classId]
                                            && state[classId][quizId],
                                            {[action.payload.id]: action.payload})
                })
            });
        case REMOVE_QUESTION:
            const removeSubState = Object.assign({}, state[classId][quizId]);
            delete removeSubState[action.payload.id];
            return Object.assign({}, state, {
                [classId]: Object.assign({}, state[classId], {
                    [quizId]: removeSubState
                })
            });
        case OPEN_QUESTION:
            return Object.assign({}, state, {
                [classId]: Object.assign({}, state[classId], {
                    [quizId]: Object.assign({}, state[classId][quizId], {
                        [action.payload.id]: Object.assign(
                            {}, state[classId][quizId][action.payload.id], {
                                status: "open"
                            })
                    })
                })
            });
        case CLOSE_QUESTION:
            return Object.assign({}, state, {
                [classId]: Object.assign({}, state[classId], {
                    [quizId]: Object.assign({}, state[classId][quizId], {
                        [action.payload.id]: Object.assign(
                            {}, state[classId][quizId][action.payload.id], {
                                status: "closed"
                            })
                    })
                })
            });
        default:
            return state;
    }
};
