/* @flow */
"use strict";

import { ADD_QUIZ, REMOVE_QUIZ } from "./types";
import { getRandomInt, MAX_UINT_32 } from "../utils/func";

export const addQuiz = (classId, quizName) => {
    return {
        type   : ADD_QUIZ,
        payload: {
            name      : quizName,
            id        : getRandomInt(0, MAX_UINT_32 + 1),
            "class-id": classId
        }
    };
};

export const removeQuiz = q => {
    return {
        type: REMOVE_QUIZ,
        payload: q
    };
};

export default {
    addQuiz,
    removeQuiz
};
