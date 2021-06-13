import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import {createMuiTheme, CssBaseline, ThemeProvider} from "@material-ui/core";
import DashboardLayout from "./DashboardLayout";

const Application = () => {

        const theme = createMuiTheme({
            palette: {
                type: "light",
            }
        });

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <DashboardLayout/>
            </ThemeProvider>
        );
}

export default Application;
