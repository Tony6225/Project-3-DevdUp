import React, { Component, Fragment } from 'react';
import { MDBBtn, MDBAnimation } from "mdbreact";
import logo from '../../images/logo3.png';
import { Link } from 'react-router-dom';



class landingPage extends Component {
  render() {
    return (
      <MDBAnimation type="fadeIn" duration="2s">
        <div className="container">
          <div className="centered">
            <img className="logo" src={logo} alt="logo" />
            <h3 className="autotype">Connecting employers with
      <span className="typer" id="main" data-words=" talented developers., expert coders., gifted designers., enthusiastic nerds."
                data-colors="#494949" data-delay="100" data-deleteDelay="1000"></span>
              <span className="cursor" data-owner="main"></span>
            </h3>
            <div className="button-block">
              <Fragment>
                <MDBBtn className="learnMore" outline color="info" >
                  <Link to='/about'>
                    Click Here to Learn More
                  </Link>
                </MDBBtn>
              </Fragment>
            </div>
          </div>
        </div>
      </MDBAnimation >
    )
  }
}

export default landingPage

