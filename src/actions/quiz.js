/* @flow */
"use strict";

import { startLoading, endLoading } from "./view";
import { ADD_QUIZ, REMOVE_QUIZ } from "./types";
import { API_URL } from "../config";
import { getRandomInt, MAX_UINT_32 } from "../utils/func";

const _addQuiz = (classId, quizName, id = getRandomInt(0, MAX_UINT_32 + 1),
                  totalPoints = 0) => {
    return {
        type   : ADD_QUIZ,
        payload: {
            name          : quizName,
            id            : `${id}`,
            "class-id"    : classId,
            "total-points": totalPoints
        }
    };
};

export const addQuiz = (classId, quizName) => dispatch => {
    dispatch(startLoading());
    const newQuizAction = _addQuiz(classId, quizName);
    fetch(`${API_URL}/quiz`, {
        method : "POST",
        headers: {"Content-Type": "application/json"},
        body   : JSON.stringify(
            {
                name        : newQuizAction.payload.name,
                id          : newQuizAction.payload.id,
                class_id    : newQuizAction.payload["class-id"]
            }
        )
    })
        .then(response => {
            dispatch(endLoading());
            return response.ok
                ? dispatch(newQuizAction)
                : dispatch();
        });  // should have sent error here
};

export const removeQuiz = q => dispatch => {
    dispatch(startLoading());
    fetch(`${API_URL}/quiz?quiz_id=${q.id}`, {method: "DELETE"})
        .then(response => {
            dispatch(endLoading());
            return response.ok
                ? dispatch({type: REMOVE_QUIZ, payload: q})
                : dispatch();
        });
};

//export const removeQuiz = q => {
//    return {
//        type   : REMOVE_QUIZ,
//        payload: q
//    };
//};

export const getQuiz = classID => dispatch => {
    dispatch(startLoading());
    fetch(`${API_URL}/quiz?class_id=${classID}`, {method: "GET"})
        .then(response => {
            dispatch(endLoading());
            return response.json();
        })
        .then(data => data.forEach(
            quiz => dispatch(_addQuiz(quiz.class_id, quiz.name, quiz.id,
                                      quiz.total_points))));
};

export default {
    addQuiz,
    removeQuiz,
    getQuiz
};
