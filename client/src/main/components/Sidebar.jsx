import React, {useState} from "react";
import {Nav} from "react-bootstrap";

export default function Sidebar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    return (
        <div className={"sidebar"}>
            <Nav fill justify defaultActiveKey="/home" className="flex-column" variant={"tabs"}>
                <Nav.Link eventKey="link-0">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav>
        </div>
    );
}
