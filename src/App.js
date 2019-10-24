import React from 'react';
import './CSS/Style.css'
import './App.css';
import LandingPage from './components/landing-page/landingPage';
import RegPage from './components/reg-page/regPage';
import DevQuestions from './components/dev-questions/devQuestions';
import EmpQuestions from './components/emp-questions/empQuestions';
import Login from './components/login-page/login';
import JobsList from './components/jobs-list/jobsList';
import { Route, BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
