/* @flow */
"use strict";

import { browserHistory } from "react-router";
import { CHANGE_VIEW, BUILD_VIEW_STACK } from "./types";

const createPathName = path => ({
    name: path.substring(path.lastIndexOf("/") + 1),
    path
});

export const changeView = path => {
    browserHistory.push(path);
    return {
        type   : CHANGE_VIEW,
        payload: createPathName(path)
    };
};

export const buildStack = path => {
    const parts = path.split("/");
    const stack = [];
    for (let i = 1; i < parts.length; i++) {
        if (i !== 2) {
            stack.push(createPathName(parts.slice(0, i + 1).join("/")));
        }
    }
    return {
        type: BUILD_VIEW_STACK,
        payload: stack
    };
};

export default {
    changeView,
    buildStack
};
