import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import ItemList from "./containers/ItemList";
import reducer from "./reducers/index";

import actionLogger from "../util/middleware/actionLogger";

const store = createStore(
    reducer,
    applyMiddleware(actionLogger)
);

ReactDom.render(
    <Provider store={store}>
        <ItemList/>
    </Provider>,
    document.getElementById("dndTest")
);
