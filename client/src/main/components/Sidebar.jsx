import React, {useState} from "react";
import {Box, Drawer, Hidden, List} from "@material-ui/core";
import {SupervisorAccount} from "@material-ui/icons";
import NavItem from "./NavItem";

export default function Sidebar(onNavClose, openNav) {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const navItems = [
        {
            href: '/profiles',
            icon: SupervisorAccount,
            title: 'Profiles'
        }
    ];

    return (
        <>
            <Drawer
                anchor="left"
                open
                variant="persistent"
                PaperProps={{
                    sx: {
                        width: 500,
                        top: 75,
                        height: 'calc(100% - 75px)'
                    }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                    }}
                >
                    <Box sx={{p: 2}}>
                        <List>
                            {navItems.map((item, index) => (
                                <NavItem
                                    href={item.href}
                                    key={index}
                                    title={item.title}
                                    icon={item.icon}
                                />
                            ))}
                        </List>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}
