import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <nav className="navbar is-warning">
        <div className="navbar-end">
          <Link className="navbar-item" to="/">All the Wonders</Link>
          <Link className="navbar-item" to="/wonders/new">Add a New Wonder</Link>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
