/* @flow */
"use strict";

import { ADD_QUESTION, REMOVE_QUESTION } from "./types";

let questionID = 0;
const addQuestion = q => {
    q.id = questionID++;
    q.status = "ready";
    return {
        type   : ADD_QUESTION,
        payload: q
    };
};

const createMultipleChoiceQuestion = (prompt, maxScore, participationWeight,
                                      options, correctOption) =>
    ({
        type                  : "multiple-choice",
        prompt                : prompt,
        "max-score"           : maxScore,
        "participation-weight": participationWeight,
        "question-data"       : {options},
        "answer-data"         : {
            "correct-option": correctOption
        }
    });

export const addMultipleChoiceQuestion = function (...args) {
    return addQuestion(createMultipleChoiceQuestion.apply(this, args));
};

export const removeQuestion = q => ({
    type   : REMOVE_QUESTION,
    payload: q["quiz-id"]
});

export default {
    addMultipleChoiceQuestion,
    removeQuestion
};
