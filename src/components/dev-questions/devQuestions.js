import React, { Component, Fragment } from 'react';
import {
  MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBContainer, MDBBtn, MDBInput, MDBFormInline, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBAnimation
} from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import navlogo from '../../images/navlogo2.png';


class devQuestions extends Component {
  state = {
    radioOne: 1,
    radioTwo: 1,
    radioThree: 1,
    radioFour: 1,
    radioFive: 1
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
              <MDBCardHeader className="cardHeader">Developer Skills Questionnaire</MDBCardHeader>
              <MDBCardBody className="text-info">
                <MDBCardTitle className="cardTitle" tag="h5">Complete the form below as accurately as possible.</MDBCardTitle>
                <br />
                <MDBCardText className="cardBody">
                  <div className="questionBlockOdd">
                    <h4 className="question">Are you a front-end web developer?</h4>
                    <MDBFormInline>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(0)} checked={this.state.radioOne === 0 ? true : false} label="No Experience" type="radio" name="radioOne" id="radio0" />
                      </div>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(1)} checked={this.state.radioOne === 1 ? true : false} label="Intern" type="radio" name="radioOne" id="0" />
                      </div>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(2)} checked={this.state.radioOne === 2 ? true : false} label="Junior" type="radio" name="radioOne" id="radio2" />
                      </div>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(3)} checked={this.state.radioOne === 3 ? true : false} label="Senior" type="radio" name="radioOne" id="radio3" />
                      </div>
                    </MDBFormInline>
                  </div>
                  <div className="questionBlockEven">
                    <h4 className="question">Are you a back-end web developer?</h4>
                    <MDBFormInline>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(0)} checked={this.state.radioTwo === 0 ? true : false} label="No Experience" type="radio" name="radioTwo" id="radio0" />
                      </div>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(1)} checked={this.state.radioTwo === 1 ? true : false} label="Intern" type="radio" name="radioTwo" id="radio1" />
                      </div>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(2)} checked={this.state.radioTwo === 2 ? true : false} label="Junior" type="radio" name="radioTwo" id="radio2" />
                      </div>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(3)} checked={this.state.radioTwo === 3 ? true : false} label="Senior" type="radio" name="radioTwo" id="radio3" />
                      </div>
                    </MDBFormInline>
                  </div>
                  <div className="questionBlockOdd">
                    <h4 className="question">Can you generate custom branding, graphics and images?</h4>
                    <MDBFormInline>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(0)} checked={this.state.radioThree === 0 ? true : false} label="No Experience" type="radio" name="radioThree" id="radio0" />
                      </div>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(1)} checked={this.state.radioThree === 1 ? true : false} label="Intern" type="radio" name="radioThree" id="radio1" />
                      </div>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(2)} checked={this.state.radioThree === 2 ? true : false} label="Junior" type="radio" name="radioThree" id="radio2" />
                      </div>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(3)} checked={this.state.radioThree === 3 ? true : false} label="Senior" type="radio" name="radioThree" id="radio3" />
                      </div>
                    </MDBFormInline>
                  </div>
                  <div className="questionBlockEven">
                    <h4 className="question">Can you generate written content?</h4>
                    <MDBFormInline>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(0)} checked={this.state.radioFour === 0 ? true : false} label="No Experience" type="radio" name="radioFour" id="radio0" />
                      </div>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(1)} checked={this.state.radioFour === 1 ? true : false} label="Intern" type="radio" name="radioFour" id="radio1" />
                      </div>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(2)} checked={this.state.radioFour === 2 ? true : false} label="Junior" type="radio" name="radioFour" id="radio2" />
                      </div>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(3)} checked={this.state.radioFour === 3 ? true : false} label="Senior" type="radio" name="radioFour" id="radio3" />
                      </div>
                    </MDBFormInline>
                  </div>
                  <div className="questionBlockOdd">
                    <h4 className="question">Are you able to build analytics and SEO tools for websites</h4>
                    <MDBFormInline>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(0)} checked={this.state.radioFive === 0 ? true : false} label="No Experience" type="radio" name="radioFive" id="radio0" />
                      </div>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(1)} checked={this.state.radioFive === 1 ? true : false} label="Intern" type="radio" name="radioFive" id="radio1" />
                      </div>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(2)} checked={this.state.radioFive === 2 ? true : false} label="Junior" type="radio" name="radioFive" id="radio2" />
                      </div>
                      <div className="radiobtn">
                        <MDBInput gap onClick={this.onClick(3)} checked={this.state.radioFive === 3 ? true : false} label="Senior" type="radio" name="radioFive" id="radio3" />
                      </div>
                    </MDBFormInline>
                  </div>
                  <div className="horizontal-rule"></div>
                  <Fragment>
                    <MDBBtn className="continueBtn" outline color="info">
                      <Link to='/jobsList'>Continue</Link></MDBBtn>
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
      </React.Fragment >
    )
  }
}

export default devQuestions

