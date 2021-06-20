import React from "react";
import {Image, Navbar} from "react-bootstrap";
import {AppBar, Box, Hidden, IconButton, Input, Link, Menu, Toolbar} from "@material-ui/core";
import {Home} from "@material-ui/icons";


const Header = () => {
    return (
        <AppBar
            elevation={0}
            color={'default'}
        >
            <Toolbar>
                <Link to="/">
                    <Home/>
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <Hidden lgDown>
                    <IconButton>
                        <Input/>
                        {/*<Badge
                            badgeContent={notifications.length}
                            color="primary"
                            variant="dot"
                        >
                            <NotificationsIcon />
                        </Badge>*/}
                    </IconButton>
                    <IconButton color="default">
                        <Input/>
                    </IconButton>
                </Hidden>
                <Hidden lgUp>
                    <IconButton
                        color="dark"
                        /*onClick={onMobileNavOpen}*/
                    >
                        <Menu open/>
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
        /*<div className={"header"}>
            <Navbar fixed="top" bg="dark">
                <Navbar.Brand href="./" className="col-sm-1">
                    <Image src="favicon.ico"/>
                </Navbar.Brand>
                <Navbar.Text style={{textAlign: "center", color: "white", fontWeight: "bold", fontSize: "20px"}} className="col-sm-11">
                    Page Title
                </Navbar.Text>
            </Navbar>
        </div>*/
    );
}

export default Header;
