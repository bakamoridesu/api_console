import React, {Component} from 'react';
import AuthForm from "./auth/AuthForm";

class App extends Component {

  componentDidMount() {
    // do auth if session not exists

  }

  render() {
    return (
      <AuthForm />
    );
  }
}

export default App;
