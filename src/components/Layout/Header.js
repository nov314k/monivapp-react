import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
          <span className="navbar-brand">Movie Night Voting App</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link " href="register.html">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login.html">
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
