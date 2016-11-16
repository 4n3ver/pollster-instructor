/* @flow */
"use strict";

import { GET_CLASSES } from "./types";
import { API_URL } from "../config";

// teacher id is hardcoded to 0
export const getClassList = teacherID => dispatch =>
    fetch(`${API_URL}/classes?teacher_id=${teacherID}`, {method: "GET"})
        .then(response => response.json())
        .then(data => dispatch({type: GET_CLASSES, payload: data}));

export default {
    getClassList
};



