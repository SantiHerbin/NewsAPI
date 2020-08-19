import React from "react";

import {Link} from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <h3>NotiTec</h3>
      </Link>
    </nav>
  );
}

export default Nav;
