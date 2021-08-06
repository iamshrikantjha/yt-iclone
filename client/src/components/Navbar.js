import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation" style={{
        boxShadow : '0px 8px 8px -6px rgba(0,0,0,.05)',
      }}>
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <div className="is-size-5 has-text-weight-bold">
              YT iClone
            </div>
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            
            <Link to="/profile" className="navbar-item">
              Profile
            </Link>

            <Link to="/create" className="navbar-item">
              Create Post
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/signup" className="button is-dark">
                  <strong>Sign up</strong>
                </Link>
                <Link to="/login" className="button is-light">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
