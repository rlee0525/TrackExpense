import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
    this.handleUsers = this.handleUsers.bind(this);
  }

  signOut() {
    (this.props.logout()).then(() => hashHistory.replace("/"));
  }

  handleUsers() {
    this.props.router.push("/users");
  }

  isAdmin() {
    return (
      <li onClick={this.handleUsers} className={this.props.location.pathname==="/users" ? "active" : ""}>Users</li>
    );
  }

  render() {
    let currentUser = this.props.currentUser;
    let adminUser = currentUser && this.props.currentUser.admin;

    return (
      <header>
        <section className="nav-left">
          <span>
            <Link to="/expenses">
              <img id="logo" src="http://res.cloudinary.com/rlee0525/image/upload/v1489794699/logo1_ifce4z.png"/>
            </Link>
          </span>
        </section>
        <section className="nav-right">
          <ul>
            { adminUser && this.isAdmin() }
            <li className={this.props.location.pathname==="/expenses" ? "active" : ""} onClick={() => this.props.router.push("/expenses")}>Expenses</li>
            <li className={this.props.location.pathname==="/reports" ? "active" : ""} onClick={() => this.props.router.push("/reports")}>Reports</li>
            <li onClick={this.signOut}>Sign Out</li>
          </ul>
        </section>
      </header>
    );
  }
}

export default withRouter(Navbar);
