/* @flow */
"use strict";

import { browserHistory } from "react-router";
import { CHANGE_VIEW } from "./types";

export const changeView = (path) => {
    browserHistory.push(path);
    return {
        type: CHANGE_VIEW,
        payload: path
    };
};

export default {
    changeView
};
