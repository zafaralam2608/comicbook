import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import {createMuiTheme, CssBaseline, ThemeProvider} from "@material-ui/core";
import DashboardLayout from "./DashboardLayout";

export default function Application() {


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
            /*<div style={{display: "flex", flexDirection: "row"}}>
                <Header/>
                <div className={"center"}>
                    <Sidebar/>
                    <Content/>
                </div>
                <Footer/>
            </div>*/

    /*retrieveDataFromServer() {
        this.props.dispatch(appActions.getProfiles());
    }*/
}

/*export default connect(store => {
    return {
        app: store.get('app')
    }
})(Application);*/
