import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container} from "@material-ui/core";
import Profile from "./Profile";
import Album from "./Album";
import {useStyles} from "../constants/styles";

export default function Content() {

        const classes = useStyles();

        return (
            <>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <BrowserRouter>
                            <Switch>
                                <Route path="/">
                                    <Album/>
                                </Route>
                                <Route path="/">
                                    <Profile/>
                                </Route>
                            </Switch>
                        </BrowserRouter>
                    </Container>
                </main>
            </>
        );

}

