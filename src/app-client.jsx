/* @flow */
"use strict";

// tell webpack to copy static html and css to build folder
require.context("../public/", true, /^\.\/.*\.(html|css)/);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import reduxThunk from "redux-thunk";
import trackView from "./components/hoc/trackView";
import { AUTH_USER } from "./actions/types";
import ClassList from "./components/class/ClassList";
import QuizList from "./components/quiz/QuizList";
import Quiz from "./components/quiz/Quiz";
import Breadcrumb from "./components/Breadcrumb";
import reducers from "./reducers";
import App from "./components/App";
import Welcome from "./components/Welcome";

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(reduxThunk),

        // TODO: make sure to remove this in production
        window.devToolsExtension
            ? window.devToolsExtension()
            : f => f
    )
);
const token = localStorage.getItem("token");

if (token) {
    // updating app state before anything is rendered
    store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/">
                <IndexRoute component={Welcome}/>
                <Route component={App}>
                    <Route component={Breadcrumb}>
                        <Route path="classes">
                            <IndexRoute component={trackView(ClassList)}/>
                            <Route path=":classId/quizzes">
                                <IndexRoute component={trackView(QuizList)}/>
                                <Route
                                    path=":quizzesId"
                                    component={trackView(Quiz)}
                                />
                            </Route>
                        </Route>
                    </Route>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.querySelector("#app")
);


