/* @flow */
"use strict";

export * from "./auth";
export * from "./view";
export * from "./question";
export * from "./quiz";
export * from "./classes";

import auth from "./auth";
import view from "./view";
import question from "./question";
import quiz from "./quiz";
import classes from "./classes";
export default Object.assign({}, auth, view, question, quiz, classes);

