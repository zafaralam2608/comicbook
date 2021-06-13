import React, {Component} from "react";
import Album from "./Album";
import {connect} from "react-redux";
import {Application} from "./Application";
import Profile from "./Profile";
import {useStyles} from "../constants/styles";

export default function Content() {
        const styles = useStyles();

        return (
            <div className={styles.content}>
                <Profile/>
            </div>
        );

}

/*export default connect(store => {
    return {
        app: store.get('app')
    }
})(Content);*/
