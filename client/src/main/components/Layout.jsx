import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import useStyles from '../constants/styles';

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
          open={open}
        />
        <BrowserRouter>
          <Sidebar
            handleDrawerClose={handleDrawerClose}
            open={open}
          />
          <Content />
        </BrowserRouter>
      </div>
    </>
  );
};

export default Layout;
