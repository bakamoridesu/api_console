import React, {Component} from 'react';
import AuthForm from "./auth/AuthForm";
import Dashboard from "./dashboard/Dashboard";

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import ProtectedRoute from "./common/ProtectedRoute";

class App extends Component {

  componentDidMount() {
    // do auth if session not exists
  }

  render() {
    return (
      <Router>
        <ProtectedRoute path='/' component={Dashboard}/>
        <Route path='/login' exact component={AuthForm} />
      </Router>
    );
  }
}

export default App;
