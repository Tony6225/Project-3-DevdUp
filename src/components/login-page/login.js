import React, { Component, Fragment } from 'react';
import {
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBContainer, MDBBtn, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBAnimation
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import navlogo from '../../images/navlogo2.png';


class login extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <MDBNavbar className="navBar" color="indigo" dark expand="md">
                        <MDBNavbarBrand>
                            <img className="navlogo" src={navlogo} alt="navlogo" />
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse} />
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBFormInline>
                                    <MDBNavItem>
                                        {/* <MDBNavLink className="navlink" to="Login">Home</MDBNavLink> */}
                                        <a className="navlink" href="/">Home</a>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        {/* <MDBNavLink className="navlink" to="#!">Dashboard</MDBNavLink> */}
                                        <a className="navlink" href="/about">About</a>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        {/* <MDBNavLink className="navlink" to="#!">Login</MDBNavLink> */}
                                        <a className="navlink" href="/login">Login</a>
                                    </MDBNavItem>
                                </MDBFormInline>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBNavbar>
                </Router>

                <MDBAnimation type="fadeIn" duration="2s">
                    <MDBContainer className="regContainer">
                        <MDBCard border="info" className="m-3">
                            <MDBCardHeader className="cardHeader">User Login</MDBCardHeader>
                            <MDBCardBody className="text-info">
                                <MDBCardTitle className="loginTitle" tag="h5">Enter your email and password to login.</MDBCardTitle>
                                <br />
                                <MDBCardText className="cardBody">
                                    <form className="login-form">
                                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                            Email
            </label>
                                        <input
                                            type="email"
                                            id="defaultFormLoginEmailEx"
                                            className="form-control"
                                        />
                                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                            Password
            </label>
                                        <input
                                            type="password"
                                            id="defaultFormLoginPasswordEx"
                                            className="form-control"
                                        />
                                        <div className="text-center mt-4">
                                            <div className="button-block">
                                                <Fragment>
                                                    <MDBBtn className="regBtn" outline color="info">Continue</MDBBtn>
                                                </Fragment>
                                            </div>
                                        </div>
                                    </form>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard >
                    </MDBContainer >
                </MDBAnimation>
                <div className="footer">
                    <p className="footerText">
                        <h6>CWRU Bootcamp Project 3 Team | Copyright &copy; 2019</h6>
                    </p>
                </div>
            </React.Fragment>
        )
    }
}

export default login

