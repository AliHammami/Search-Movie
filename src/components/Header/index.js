import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import './header.scss';


function Header() {
  return (
    <section>
      <div id="image-header" />
      <div id="header">
        <AppBar position="static" style={{ backgroundColor: 'Brown' }}>
          <Toolbar>
            PASSION MOVIES
          </Toolbar>
        </AppBar>
      </div>
    </section>
  );
}


export default Header;
