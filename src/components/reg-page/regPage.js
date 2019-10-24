import React, { Component, Fragment } from 'react';
import {
  MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBContainer, MDBBtn, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBInput, MDBAnimation
} from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import navlogo from '../../images/navlogo2.png';
// import { Link } from 'react-router-dom';

class regPage extends Component {

  state = {
    radio: 1
  };

  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  };

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
              <MDBCardHeader className="cardHeader">Registration</MDBCardHeader>
              <MDBCardBody className="text-info">
                <MDBCardTitle className="cardTitle" tag="h5">Please complete the form to create your unique login.</MDBCardTitle>
                <br />
                <MDBCardText className="cardBody">
                  <form className="regForm">
                    <label htmlFor="defaultFormRegisterFirstNameEx" className="grey-text">
                      First Name
            </label>
                    <input
                      type="text"
                      id="defaultFormRegisterFirstNameEx"
                      className="form-control"
                    />
                    <label htmlFor="defaultFormRegisterLastNameEx" className="grey-text">
                      Last Name
            </label>
                    <input
                      type="text"
                      id="defaultFormRegisterLastNameEx"
                      className="form-control"
                    />
                    <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                      Email
            </label>
                    <input
                      type="email"
                      id="defaultFormRegisterEmailEx"
                      className="form-control"
                    />
                    <label
                      htmlFor="defaultFormRegisterPasswordEx"
                      className="grey-text"
                    >
                      Password
            </label>
                    <input
                      type="password"
                      id="defaultFormRegisterPasswordEx"
                      className="form-control"
                    />
                    <div>
                      <label
                        htmlFor="defaultFormRegisterRoleEx"
                        className="grey-text"
                      >
                        Choose your account type
            </label>
                      <MDBFormInline>
                        <div className="radiobtn">
                          <MDBInput gap onClick={this.onClick(0)} checked={this.state.radio === 0 ? true : false} label="Developer" type="radio" name="radioDev" id="radio0" />
                        </div>
                        <div className="radiobtn">
                          <MDBInput gap onClick={this.onClick(1)} checked={this.state.radio === 1 ? true : false} label="Employer" type="radio" name="radioEmp" id="0" />
                        </div>
                      </MDBFormInline>
                    </div>
                    <div className="text-center mt-4">
                      <div className="button-block">
                        <Fragment>
                          <MDBBtn className="regBtn" outline color="info">
                            <Link to='/devQuestions'>Sign Up</Link></MDBBtn>
                        </Fragment>
                      </div>
                    </div>
                  </form>
                </MDBCardText>
                <div className="definitions">
                  <p className="devDef">Developer: Define your skills for employers to see and matchmake with jobs you're capable of performing. Get selected by employers for jobs you're qualified to do.</p>
                  <br />
                  <p className="empDef">Employer: Create jobs based on your needs. Match-make with
              with developers according to your job requirements and select from a list of qualified professionals.</p>
                </div>
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

export default regPage

