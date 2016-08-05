import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import Counter1 from "./containers/Counter1";
import Counter2 from "./containers/Counter2";
import reducer from "./reducers/index";

import actionLogger from "../util/middleware/actionLogger";

const store = createStore(
    reducer,
    applyMiddleware(actionLogger)
);

ReactDom.render(
    <Provider store={store}>
        <div>
            <Counter1/>
            <Counter2/>
        </div>
    </Provider>,
    document.getElementById("sample")
);