import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link
                            to="/"
                            style={{
                                fontFamily: "monospace"
                            }}
                            className="left brand-logo black-text"
                        >
                            <i className="material-icons">code</i>
                            Tempus
            </Link>


                        <div className="right">
                            <Link
                                to="/login"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large btn-flat waves-effect white black-text"
                            >
                                Log In
                </Link>
                        </div>
                        <div className="right">
                            <Link
                                to="/register"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large btn-flat waves-effect white black-text"
                            >
                                Register
                             </Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navbar;