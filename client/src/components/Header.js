import React from 'react';
import { Button, Image } from 'react-bootstrap';
import logo from '../../res/images/santa.png';

const Header = () => (
  <div className="header">
    <Image src={logo} onClick={() => null} />
    <h1>Santa Admin</h1>
    <div>
      <Button variant="dark">Logout</Button>
    </div>

  </div>
);

export default Header;
