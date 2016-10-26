/* @flow */
"use strict";

import { ADD_QUESTION, REMOVE_QUESTION } from "./types";

export const addQuestion = q => {
    q.status = "ready";
    return {
        type   : ADD_QUESTION,
        payload: q
    };
};

export const removeQuestion = q => {
    return {
        type   : REMOVE_QUESTION,
        payload: q.id
    };
};

export default {
    addQuestion,
    removeQuestion
};
