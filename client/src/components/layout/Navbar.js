import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions"
import PropTypes from "prop-types";
import { connect } from "react-redux"

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };



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

                        {(this.setState.isLoggedIn === false)}
                        {(this.state.isLoggedIn === false) ?

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
                            :

                            <div className="right">
                                {(this.setState.isLoggedIn === true)}
                                {(this.state.isLoggedIn === true)}
                                <Link
                                    to="/logout"
                                    style={{
                                        width: "140px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                    }}

                                    onClick={this.onLogoutClick}
                                    className="btn btn-large btn-flat waves-effect white black-text" >
                                    logout
                                 </Link>


                            </div>
                        }

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


Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(
    mapStateToProps,
    { logoutUser }
)(Navbar);