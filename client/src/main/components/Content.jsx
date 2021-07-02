import React from "react";
import {Route, Switch} from "react-router-dom";
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
                            <Switch>
                                <Route exact path="/">
                                    <div>To Do</div>
                                </Route>
                                <Route path="/profiles">
                                    <Album/>
                                </Route>
                                <Route path="/profile/:id">
                                    <Profile/>
                                </Route>
                            </Switch>
                    </Container>
                </main>
            </>
        );

}

