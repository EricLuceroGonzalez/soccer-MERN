import React from "react";
import { withRouter, Link } from "react-router-dom";

class Navbar extends React.Component {
  getNavLinkClass = path => {
    return this.props.location.pathname === path ? "active" : "";
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary myNav">
          <Link to={"/"} className="nav-link">
            <span
              className="navbar-brand"
              style={{
                color: "white",
                fontWeight: "bolder",
                fontSize: "2em",
                textShadow: "2px 2px 1px black"
              }}
            >
              Navbar
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li>
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/teams"} className="nav-link">
                  Teams
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/**
          <Switch>
          <Route exact path="/" component={Footer} />
          <Route path="/Footer" component={Footer} />
        </Switch>
 */}
      </div>
    );
  }
}
Navbar = withRouter(Navbar);
export default Navbar;