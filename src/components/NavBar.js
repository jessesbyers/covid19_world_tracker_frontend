import React from 'react';

import { NavLink } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

const NavBar = () => {
  return (
    <div style={{ paddingBottom: '15px', marginBottom: '15px' }}>
        <h1 className="header" >COVID-19 World Tracker</h1>

        <NavLink 
        // style={{ marginRight: '10px' }} 
        to="/">
          <Button variant="dark">NavLink Button to HOME</Button>
      </NavLink>
    </div>
  );
}

export default NavBar;