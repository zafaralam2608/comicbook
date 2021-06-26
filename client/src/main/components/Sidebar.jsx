import React from "react";
import {Divider, Drawer, IconButton, Link, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {ChevronLeft, Dashboard, People} from "@material-ui/icons";
import clsx from "clsx";
import {useStyles} from "../constants/styles";

export default function Sidebar(props) {
    const classes = useStyles();

    return (
        <>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
                }}
                open={props.open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={() => props.handleDrawerClose()}>
                        <ChevronLeft/>
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <Link href={'/'}>
                        <ListItem button>
                            <ListItemIcon>
                                <Dashboard/>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard"/>
                        </ListItem>
                    </Link>
                    <Link href={'/profiles'}>
                        <ListItem button>
                            <ListItemIcon>
                                <People/>
                            </ListItemIcon>
                            <ListItemText primary="Profiles"/>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </>
    );
}
