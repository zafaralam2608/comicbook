import React from "react";
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Menu, Notifications} from '@material-ui/icons';
import clsx from "clsx";
import {useStyles} from "../constants/styles";


const Header = (props) => {

    const classes = useStyles();

    return (
        <>
            <AppBar position="absolute" className={clsx(classes.appBar, props.open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="default"
                        aria-label="open drawer"
                        onClick={() => props.handleDrawerOpen()}
                        className={clsx(classes.menuButton, props.open && classes.menuButtonHidden)}
                    >
                        <Menu />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;
