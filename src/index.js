import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import regPage from './components/reg-page/regPage';
import login from './components/login-page/login';
import landingPage from './components/landing-page/landingPage';
import devQuestions from './components/dev-questions/devQuestions';
import empQuestions from './components/emp-questions/empQuestions';
import about from './components/about-page/about';
import jobsList from './components/jobs-list/jobsList';



export const routing = (
    <Router>
        <div>
            <Route exact path="/" component={landingPage} />
            <Route path="/registration" component={regPage} />
            <Route path="/login" component={login} />
            <Route path="/devQuestions" component={devQuestions} />
            <Route path="/empQuestions" component={empQuestions} />
            <Route path="/about" component={about} />
            <Route path="/jobsList" component={jobsList} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();