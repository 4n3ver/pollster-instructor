/* @flow */
"use strict";

import { ADD_QUIZ, REMOVE_QUIZ } from "./types";
import { API_URL } from "../config";
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
        type   : REMOVE_QUIZ,
        payload: q
    };
};

export const getQuiz = classID => dispatch =>
    fetch(`${API_URL}/quiz?class_id=${classID}`, {method: "GET"})
        .then(response => response.json())
        .then(data => data.forEach(
            quiz => dispatch(
                {
                    type   : ADD_QUIZ,
                    payload: {
                        "class-id"    : quiz.class_id,
                        id            : quiz.id,
                        name          : quiz.name,
                        "total-points": quiz.total_points
                    }
                }
            )));

export default {
    addQuiz,
    removeQuiz,
    getQuiz
};
