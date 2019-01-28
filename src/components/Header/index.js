import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import './header.scss';

const styles = {
  root: {
    background: 'rgb(165, 42, 42)',
  },
};


function Header(props) {
  const { classes } = props;
  return (
    <div>
      <div id="image-header" />
      <Link to="/">
        <div>
          <AppBar className={classes.root}>
            <Toolbar>
            PASSION MOVIES
            </Toolbar>
          </AppBar>
        </div>
      </Link>
    </div>
  );
}


export default withStyles(styles)(Header);
