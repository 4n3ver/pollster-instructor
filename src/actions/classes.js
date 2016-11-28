/* @flow */
"use strict";

import { startLoading, endLoading } from "./view";
import { GET_CLASSES } from "./types";
import { API_URL } from "../config";

// teacher id is hardcoded to 0
export const getClassList = teacherID => dispatch => {
    dispatch(startLoading());
    fetch(`${API_URL}/classes?teacher_id=${teacherID}`, {method: "GET"})
        .then(response => {
            dispatch(endLoading());
            return response.json();
        })
        .then(data => dispatch({type: GET_CLASSES, payload: data}));
};

export default {
    getClassList
};



