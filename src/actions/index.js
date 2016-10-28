/* @flow */
"use strict";

export * from "./auth";
export * from "./view";
export * from "./question";
export * from "./quiz";

import auth from "./auth";
import view from "./view";
import question from "./question";
import quiz from "./quiz";
export default Object.assign({}, auth, view, question, quiz);

