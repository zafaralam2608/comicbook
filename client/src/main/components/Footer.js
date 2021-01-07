import "../../../styles/components/common/Footer.css";

import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";

export default function Footer() {
    return (
        <div className="footer">
            <AppBar>
                <Toolbar>
                    <Typography align="center" variant="h4">
                        Footer here
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}