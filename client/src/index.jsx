import React from "react";
import {render} from "react-dom";
import Application from "./main/components/Application";

render(
    <React.StrictMode>
        <Application/>
    </React.StrictMode>,
    document.getElementById("root")
);
