import React, { Component, Fragment } from 'react';
import {
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBContainer, MDBBtn, MDBInput, MDBFormInline, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBAnimation
} from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import navlogo from '../../images/navlogo2.png';

class empQuestions extends Component {
    state = {
        radioSix: 1,
        radioSeven: 1,
        radioEight: 1,
        radioNine: 1,
        radioTen: 1
    }

    onClick = nr => e => {
        this.setState({
            [e.target.name]: nr
        });
    }

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
                            <MDBCardHeader className="cardHeader">Employer Job Creation</MDBCardHeader>
                            <MDBCardBody className="text-info">
                                <MDBCardTitle className="cardTitle" tag="h5">Complete the form below to create a new project.</MDBCardTitle>
                                <br />
                                <MDBCardText className="cardBody">
                                    <div className="questionBlockOdd">
                                        <label htmlFor="defaultFormJobName" className="grey-text">
                                            <h4 className="question">What would you like to name this project?</h4>
                                        </label>
                                        <input
                                            type="text"
                                            id="defaultFormJobName"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="questionBlockEven">
                                        <label htmlFor="defaultFormJobDuration" className="grey-text">
                                            <h4 className="question">What is the expected duration of this project in weeks?</h4>
                                        </label>
                                        <MDBInput type="number" id="defaultFormJobDuration"
                                            className="form-control" />
                                    </div>
                                    <div className="questionBlockOdd">
                                        <label htmlFor="defaultFormJobPay" className="grey-text">
                                            <h4 className="question">How much does this project pay?</h4>
                                        </label>
                                        <input
                                            type="text"
                                            id="defaultFormJobPay"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="questionBlockEven">
                                        <h4 className="question">Is the creation of custom software applications needed for this project?</h4>
                                        <MDBFormInline>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(0)} checked={this.state.radioSix === 0 ? true : false} label="Not necessary" type="radio" name="radioSix" id="radio0" />
                                            </div>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(1)} checked={this.state.radioSix === 1 ? true : false} label="Somewhat necessary" type="radio" name="radioSix" id="radio1" />
                                            </div>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(2)} checked={this.state.radioSix === 2 ? true : false} label="Important" type="radio" name="radioSix" id="radio2" />
                                            </div>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(3)} checked={this.state.radioSix === 3 ? true : false} label="Mandatory" type="radio" name="radioSix" id="radio3" />
                                            </div>
                                        </MDBFormInline>
                                    </div>
                                    <div className="questionBlockOdd">
                                        <h4 className="question">Is the use of sensitive data (user logins, etc.) needed for this project?</h4>
                                        <MDBFormInline>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(0)} checked={this.state.radioSeven === 0 ? true : false} label="Not necessary" type="radio" name="radioSeven" id="radio0" />
                                            </div>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(1)} checked={this.state.radioSeven === 1 ? true : false} label="Somewhat necessary" type="radio" name="radioSeven" id="radio1" />
                                            </div>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(2)} checked={this.state.radioSeven === 2 ? true : false} label="Important" type="radio" name="radioSeven" id="radio2" />
                                            </div>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(3)} checked={this.state.radioSeven === 3 ? true : false} label="Mandatory" type="radio" name="radioSeven" id="radio3" />
                                            </div>
                                        </MDBFormInline>
                                    </div>
                                    <div className="questionBlockEven">
                                        <h4 className="question">Is the creation of custom graphic assets needed for this project?</h4>
                                        <MDBFormInline>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(0)} checked={this.state.radioEight === 0 ? true : false} label="Not necessary" type="radio" name="radioEight" id="radio0" />
                                            </div>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(1)} checked={this.state.radioEight === 1 ? true : false} label="Somewhat necessary" type="radio" name="radioEight" id="radio1" />
                                            </div>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(2)} checked={this.state.radioEight === 2 ? true : false} label="Important" type="radio" name="radioEight" id="radio2" />
                                            </div>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(3)} checked={this.state.radioEight === 3 ? true : false} label="Mandatory" type="radio" name="radioEight" id="radio3" />
                                            </div>
                                        </MDBFormInline>
                                    </div>
                                    <div className="questionBlockOdd">
                                        <h4 className="question">Does your project need newly written content?</h4>
                                        <MDBFormInline>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(0)} checked={this.state.radioNine === 0 ? true : false} label="Not necessary" type="radio" name="radioNine" id="radio0" />
                                            </div>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(1)} checked={this.state.radioNine === 1 ? true : false} label="Somewhat necessary" type="radio" name="radioNine" id="radio1" />
                                            </div>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(2)} checked={this.state.radioNine === 2 ? true : false} label="Important" type="radio" name="radioNine" id="radio2" />
                                            </div>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(3)} checked={this.state.radioNine === 3 ? true : false} label="Mandatory" type="radio" name="radioNine" id="radio3" />
                                            </div>
                                        </MDBFormInline>
                                    </div>
                                    <div className="questionBlockEven">
                                        <h4 className="question">Does your project need analytics or search engine optimization?</h4>
                                        <MDBFormInline>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(0)} checked={this.state.radioTen === 0 ? true : false} label="Not necessary" type="radio" name="radioTen" id="radio0" />
                                            </div>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(1)} checked={this.state.radioTen === 1 ? true : false} label="Somewhat necessary" type="radio" name="radioTen" id="radio1" />
                                            </div>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(2)} checked={this.state.radioTen === 2 ? true : false} label="Important" type="radio" name="radioTen" id="radio2" />
                                            </div>
                                            <div className="radiobtn">
                                                <MDBInput gap onClick={this.onClick(3)} checked={this.state.radioTen === 3 ? true : false} label="Mandatory" type="radio" name="radioTen" id="radio3" />
                                            </div>
                                        </MDBFormInline>
                                    </div>
                                    <div className="horizontal-rule">
                                    </div>
                                    <Fragment>
                                        <MDBBtn className="continueBtn" outline color="info">Continue</MDBBtn>
                                    </Fragment>
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

export default empQuestions