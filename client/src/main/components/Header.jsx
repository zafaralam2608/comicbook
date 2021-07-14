import React from 'react';
import {
  AppBar, IconButton, PropTypes, Toolbar, Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import clsx from 'clsx';
import useStyles from '../constants/styles';

const Header = ({ handleDrawerOpen, open }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="default"
            aria-label="open drawer"
            onClick={() => handleDrawerOpen()}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
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
};

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
};

export default Header;
