import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBInput, MDBAnimation, MDBJumbotron, MDBBtn, MDBRow, MDBCol, MDBIcon, MDBCardImage
} from "mdbreact";
import navlogo from '../../images/navlogo2.png';
import aboutPic from '../../images/business-3152586_1280.jpg';
import me from '../../images/me.jpg';
import ta from '../../images/TA.jpg';
import rwd from '../../images/RWD.jpg';


class about extends Component {
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
                    <MDBJumbotron fluid >
                        <MDBCol className="text-white text-center py-8 px-4 my-0 jumbobackground" style={{ backgroundImage: `url(https://w.wallhaven.cc/full/p8/wallhaven-p8mk6j.jpg)` }}>
                            <MDBContainer>
                                <MDBCol className="py-5">
                                    <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold jumbohdr" >Matching Talent With Demand...</MDBCardTitle>
                                    <p className="mx-5 mb-5 jumboTxt">Whether your an employer looking for help with a project or a developer looking for work, Dev'd Up is the perfect solution!
                </p>
                                    <MDBBtn outline color="info" className="mb-5 getStarted"><Link to='/registration'>Get Started</Link></MDBBtn>
                                </MDBCol>
                            </MDBContainer>
                        </MDBCol>
                    </MDBJumbotron>

                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="12" className="mb-4">
                                <MDBCard className="aboutCard" color="info-color" text="white">
                                    <MDBCardHeader className="cardHeader" color="primary-color" tag="h4">
                                        About
                                </MDBCardHeader>
                                    <MDBCardBody>
                                        <img className="aboutPic" src={aboutPic} alt="aboutPic" />
                                        <p className="aboutParagraph">Dev'd Up is a ReactJS-based web app designed to help employers connect with technical professionals for one-time projects. Simply choose your role during registration, fill out the corresponding form and let our match-making algorithm take care of the rest! Dev'd Up makes it easy for you to find qualified professionals that are capable of getting the job done.</p>
                                        <p className="aboutParagraph">Dev'd Up is also the perfect tool for freelance developers. With just a few clicks, your profile will be placed in front of  employers seeking help. You can even view available job openings and apply with the click of a button right from your dashboard.</p>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                    <MDBContainer>
                        <MDBRow className="mb-4 twoCards">
                            <MDBCol sm="6">
                                <MDBCard>
                                    <MDBCardHeader className="cardHeader" color="primary-color" tag="h4">
                                        For Employers
                                </MDBCardHeader>
                                    <MDBCardBody>
                                        <MDBCardTitle>Sign up and create your next project!</MDBCardTitle>
                                        <MDBCardText>
                                            <p className="subtext">Go to the registration form and choose "Employer" as your role.</p>
                                        </MDBCardText>
                                        <Fragment>
                                            <MDBBtn className="cardBtn" outline color="info">
                                                <Link to='/registration'>Sign Up</Link></MDBBtn>
                                        </Fragment>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol sm="6">
                                <MDBCard>
                                    <MDBCardHeader className="cardHeader" color="primary-color" tag="h4">
                                        For Developers
                                </MDBCardHeader>
                                    <MDBCardBody>
                                        <MDBCardTitle>Sign up and find your next job!</MDBCardTitle>
                                        <MDBCardText>
                                            <p className="subtext">Go to the registration form and choose "Developer" as your role.</p>
                                        </MDBCardText>
                                        <Fragment>
                                            <MDBBtn className="cardBtn" outline color="info">
                                                <Link to='/registration'>Sign Up</Link></MDBBtn>
                                        </Fragment>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="12" className="mb-4">
                                <MDBCard className="teamCard" color="info-color" text="white">
                                    <MDBCardHeader className="cardHeader" color="primary-color" tag="h4">
                                        Team
                                </MDBCardHeader>
                                    <MDBCardBody>
                                        <MDBFormInline className="teamBlock">
                                            <MDBCol>
                                                <MDBCard className="teamCard" style={{ width: "20rem" }}>
                                                    <MDBCardImage className="img-fluid teamImg1" waves />
                                                    <img className="me" src={me} alt="me" />
                                                    <MDBCardBody className="teamCardText">
                                                        <MDBCardTitle className="nameTag">Tony Romaniuk</MDBCardTitle>
                                                        <MDBCardText>
                                                            Project Manager, Front-end Development, Graphic Design
          </MDBCardText>
                                                        <MDBBtn href="https://github.com/Tony6225">Github</MDBBtn>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </MDBCol>

                                            <MDBCol>
                                                <MDBCard className="teamCard" style={{ width: "20rem" }}>
                                                    <MDBCardImage className="img-fluid teamImg2" waves />
                                                    <img className="rwd" src={rwd} alt="rwd" />
                                                    <MDBCardBody className="teamCardText">
                                                        <MDBCardTitle className="nameTag">Richard W. Dimbo</MDBCardTitle>
                                                        <MDBCardText>
                                                            Back-end Development, API Routes & Paths, etc.
          </MDBCardText>
                                                        <MDBBtn href="https://github.com/RWDimbo">Github</MDBBtn>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </MDBCol>

                                            <MDBCol>
                                                <MDBCard className="teamCard" style={{ width: "20rem" }}>
                                                    <MDBCardImage className="img-fluid teamImg3" waves />
                                                    <img className="ta" src={ta} alt="ta" />
                                                    <MDBCardBody className="teamCardText">
                                                        <MDBCardTitle className="nameTag">Tony Anzalone</MDBCardTitle>
                                                        <MDBCardText>
                                                            Front-end Designer, JS Logic Repository Management
          </MDBCardText>
                                                        <MDBBtn href="https://github.com/Tanz1984">Github</MDBBtn>
                                                    </MDBCardBody>
                                                </MDBCard>
                                            </MDBCol>
                                        </MDBFormInline>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBAnimation>
                <div className="footer">
                    <p className="footerText">
                        <h6>CWRU Bootcamp Project 3 Team | Copyright &copy; 2019</h6>
                    </p>
                </div>
            </React.Fragment >

        )
    }
}

export default about

