import React from 'react';
import PropTypes from 'prop-types';
import {
  Divider, Drawer, IconButton, Link, List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import { ChevronLeft, Dashboard, People } from '@material-ui/icons';
import clsx from 'clsx';
import useStyles from '../constants/styles';

const Sidebar = ({ open, handleDrawerClose }) => {
  const classes = useStyles();

  return (
    <>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={() => handleDrawerClose()}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link href="/">
            <ListItem button>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link href="/profiles">
            <ListItem button>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Profiles" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default Sidebar;
