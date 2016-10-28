/* @flow */
"use strict";

import { MAX_UINT_32, getRandomInt } from "./func";

export const multiplechoice = Object.freeze(
    {
        fromForm: formData => ({
            id                    : formData.id || getRandomInt(0, MAX_UINT_32
                                                                + 1),
            type                  : "multiple-choice",
            prompt                : formData.prompt,
            "class-id"            : null,
            "quiz-id"             : null,
            "max-score"           : formData["max-score"],
            "participation-weight": formData["participation-weight"],
            "question-data"       : {options: formData.options},
            "answer-data"         : {
                "correct-option": formData.options[formData.correct]
            }
        }),
        toForm  : data => {
            const correctIndex = data["question-data"].options.findIndex(
                d => d === data["answer-data"]["correct-option"]);
            return {
                id                  : data.id,
                prompt              : data.prompt,
                options             : data["question-data"].options,
                correct             : correctIndex >= 0 ? correctIndex : 0,
                "max-score"         : data["max-score"],
                "partipation-weight": data["partipation-weight"]
            };
        }
    }
);
