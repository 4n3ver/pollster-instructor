/* @flow */
"use strict";

import { ADD_QUESTION, REMOVE_QUESTION, OPEN_QUESTION, CLOSE_QUESTION} from "./types";
import { startLoading, endLoading } from "./view";
import { API_URL } from "../config";

const _addQuestion = (classId, quizId, q) => ({
    type   : ADD_QUESTION,
    payload: Object.assign(q, {
        id        : `${q.id}`,
        status    : "ready",
        "quiz-id" : `${quizId}`,
        "class-id": `${classId}`
    })
});

export const addQuestion = (classId, quizId, q) => dispatch => {
    dispatch(startLoading());
    const newQuestionAction = _addQuestion(classId, quizId, q);
    fetch(`${API_URL}/instructorquestion`, {
        method : "POST",
        headers: {"Content-Type": "application/json"},
        body   : JSON.stringify(newQuestionAction.payload)
    })
        .then(response => {
            dispatch(endLoading());
            return response.ok
                ? dispatch(newQuestionAction)
                : dispatch();
        });
};

export const removeQuestion = q => dispatch => {
    dispatch(startLoading());
    fetch(`${API_URL}/instructorquestion?question_id=${q.id}`,
          {method: "DELETE"})
        .then(response => {
            dispatch(endLoading());
            return response.ok
                ? dispatch({type: REMOVE_QUESTION, payload: q})
                : dispatch();
        });
};

export const getQuestion = (classID, quizID) => dispatch => {
    dispatch(startLoading());
    fetch(`${API_URL}/instructorquestion?quiz_id=${quizID}`, {method: "GET"})
        .then(response => {
            dispatch(endLoading());
            return response.json();
        })
        .then(data => data.forEach(
            question => dispatch(_addQuestion(classID, quizID, question))));
};

export const openQuestion = q => dispatch => {
    dispatch(startLoading());
    fetch(
        `${API_URL}/askquestion?question_id=${q.id}&class_id=${q["class-id"]}`,
        {method: "POST"})
        .then(response => {
            dispatch(endLoading());
            return response.ok
                ? dispatch({type: OPEN_QUESTION, payload: q})
                : dispatch();
        });
};

export const closeQuestion = q => dispatch => {
    dispatch(startLoading());
    fetch(
        `${API_URL}/askquestion?question_id=${q.id}&class_id=${q["class-id"]}`,
        {method: "DELETE"})
        .then(response => {
            dispatch(endLoading());
            return response.ok
                ? dispatch({type: CLOSE_QUESTION, payload: q})
                : dispatch();
        });
};

export default {
    addQuestion,
    removeQuestion,
    getQuestion,
    openQuestion,
    closeQuestion
};
