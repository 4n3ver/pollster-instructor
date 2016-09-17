/* @flow */
"use strict";

import { combineReducers } from "redux";
import { reducer as formReducer} from "redux-form";

import authReducer from "./auth";
import viewReducer from "./view";

const rootReducer = combineReducers(
    {
        form: formReducer,
        auth: authReducer,
        view: viewReducer
    }
);

export default rootReducer;
