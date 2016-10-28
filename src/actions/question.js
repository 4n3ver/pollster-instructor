/* @flow */
"use strict";

import { ADD_QUESTION, REMOVE_QUESTION } from "./types";

export const addQuestion = (classId, quizId, q) => {
    return {
        type   : ADD_QUESTION,
        payload: Object.assign(q, {
            status: "ready",
            "class-id": classId,
            "quiz-id": quizId
        })
    };
};

export const removeQuestion = q => {
    return {
        type   : REMOVE_QUESTION,
        payload: q
    };
};

export default {
    addQuestion,
    removeQuestion
};
