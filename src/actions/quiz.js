/* @flow */
"use strict";

import { ADD_QUESTION, REMOVE_QUESTION } from "./types";

let questionID = 0;
export const addQuestion = q => {
    q["quiz-id"] = questionID++;
    q.status = "ready";
    return {
        type   : ADD_QUESTION,
        payload: q
    };
};

export const removeQuestion = q => ({
    type   : REMOVE_QUESTION,
    payload: q["quiz-id"]
});

export default {
    addQuestion
};
