import {useState} from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import {useStyles} from "../constants/styles";

const Layout = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={classes.root}>
                <Header
                    handleDrawerOpen={handleDrawerOpen}
                />
                <Sidebar
                    handleDrawerClose={handleDrawerClose}
                    open={open}
                />
                <Content/>
            </div>
        </>
    );
};

export default Layout;
