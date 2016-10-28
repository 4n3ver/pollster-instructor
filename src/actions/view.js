/* @flow */
"use strict";

import { browserHistory } from "react-router";
import { CHANGE_VIEW, BUILD_VIEW_STACK } from "./types";

/**
 * Remove trailing "/" from the end of the path
 *
 * @param path
 */
const sanitize = path => path.endsWith("/")
    ? path.substring(0, path.length - 1)
    : path;

/**
 * Extract the last string of a path as the name
 * i.e. /classes/1238127adkf1/quizzes -> quizzes
 *
 * @param path
 */
const createPathName = path => ({
    name: path.substring(path.lastIndexOf("/") + 1),
    path
});

export const changeView = path => {
    path = sanitize(path);
    browserHistory.push(path);
    return {
        type   : CHANGE_VIEW,
        payload: createPathName(path)
    };
};

export const buildStack = path => {
    path = sanitize(path);
    const parts = path.split("/");
    const stack = [];
    for (let i = 1; i < parts.length; i++) {
        if (i !== 2) {
            stack.push(createPathName(parts.slice(0, i + 1).join("/")));
        }
    }
    return {
        type   : BUILD_VIEW_STACK,
        payload: stack
    };
};

export default {
    changeView,
    buildStack
};
