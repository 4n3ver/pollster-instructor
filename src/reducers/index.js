/* @flow */
"use strict";

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import viewReducer from "./view";
import questionReducer from "./question";
import quizReducer from "./quiz";

const rootReducer = combineReducers(
    {
        form    : formReducer,
        auth    : authReducer,
        view    : viewReducer,
        question: questionReducer,
        quiz    : quizReducer
    }
);

export default rootReducer;
