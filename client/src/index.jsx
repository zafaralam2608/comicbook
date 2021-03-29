import React from "react";
import {render} from "react-dom";
import Application from "./main/components/Application";
import {Provider} from "react-redux";
import store from "./main/store";

render(
    <Provider store={store}>
        <Application/>
    </Provider>,
    document.getElementById("root")
);
