/* @flow */
"use strict";

export * from "./auth";
export * from "./view";
export * from "./quiz";

import auth from "./auth";
import view from "./view";
import quiz from "./quiz";
export default Object.assign({}, auth, view, quiz);

