import React, { Component, Fragment } from 'react';
import {
    MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBContainer, MDBBtn, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBTable, MDBTableBody, MDBTableHead, MDBJumbotron, MDBAnimation
} from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import navlogo from '../../images/navlogo2.png';

class jobsList extends Component {

    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
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

                <MDBJumbotron fluid className="jumboTron2">
                    <MDBContainer className="jobsJumboText">
                        <h2 className="display-4">Welcome To Your Dashboard</h2>
                        <p className="lead">Apply for jobs that you match with or use the button below to edit your profile.</p>
                        <Fragment>
                            <MDBBtn className="editProfile" outline color="info">
                                <Link to='/devQuestions'>Edit Profile</Link>
                            </MDBBtn>
                        </Fragment>
                    </MDBContainer>
                </MDBJumbotron>

                <MDBAnimation type="fadeIn" duration="2s">
                    <MDBContainer className="regContainer">
                        <MDBCard border="info" className="m-3">
                            <MDBCardHeader className="cardHeader">My Jobs</MDBCardHeader>
                            <MDBCardBody className="text-info">
                                <div className="tableJobs">
                                    <MDBTable hover>
                                        <MDBTableHead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Type</th>
                                                <th>Rate</th>
                                                <th>Email</th>
                                                <th></th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>
                                                <td>1</td>
                                                <td>Online Store</td>
                                                <td>Web App</td>
                                                <td>$35p/h</td>
                                                <td>joe@smith.com</td>
                                                <td>
                                                    <Fragment>
                                                        <MDBBtn className="matchBtn" outline color="info">Contact</MDBBtn>
                                                    </Fragment>
                                                </td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
                                </div>
                                <MDBCardText className="cardBody">
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard >
                        <br></br>
                        <MDBCard border="info" className="m-3">
                            <MDBCardHeader className="cardHeader">Job Matches</MDBCardHeader>
                            <MDBCardBody className="text-info">
                                <div className="tableJobs">
                                    <MDBTable hover>
                                        <MDBTableHead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Type</th>
                                                <th>Rate</th>
                                                <th>Email</th>
                                                <th>Apply</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>
                                                <td>1</td>
                                                <td>Landing Page</td>
                                                <td>Front-end</td>
                                                <td>$23p/h</td>
                                                <td>tommy@aol.com</td>
                                                <td>
                                                    <Fragment>
                                                        <MDBBtn className="matchBtn" outline color="info">Apply</MDBBtn>
                                                    </Fragment>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Website Authentication</td>
                                                <td>Back-end</td>
                                                <td>$40p/h</td>
                                                <td>susan@gffmail.com</td>
                                                <td>
                                                    <Fragment>
                                                        <MDBBtn className="matchBtn" outline color="info">Apply</MDBBtn>
                                                    </Fragment>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Website Redesign</td>
                                                <td>Full Stack</td>
                                                <td>$52p/h</td>
                                                <td>steve@ggz.com</td>
                                                <td>
                                                    <Fragment>
                                                        <MDBBtn className="matchBtn" outline color="info">Apply</MDBBtn>
                                                    </Fragment>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Blog Page</td>
                                                <td>Full Stack</td>
                                                <td>$44p/h</td>
                                                <td>bert@lol.com</td>
                                                <td>
                                                    <Fragment>
                                                        <MDBBtn className="matchBtn" outline color="info">Apply</MDBBtn>
                                                    </Fragment>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Staff Portal</td>
                                                <td>Back-end</td>
                                                <td>$21p/h</td>
                                                <td>megan@omg.com</td>
                                                <td>
                                                    <Fragment>
                                                        <MDBBtn className="matchBtn" outline color="info">Apply</MDBBtn>
                                                    </Fragment>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>Logo Design</td>
                                                <td>Design</td>
                                                <td>$75p/h</td>
                                                <td>michael@team.com</td>
                                                <td>
                                                    <Fragment>
                                                        <MDBBtn className="matchBtn" outline color="info">Apply</MDBBtn>
                                                    </Fragment>
                                                </td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
                                </div>
                                <MDBCardText className="cardBody">
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

export default jobsList

