import React, { Component } from 'react';
import UrlNavigator from './routers/URLNav';
import { BrowserRouter as Router } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router >
          <div className="App">
              <UrlNavigator/>
          </div>
      </Router>
    );
  }
}

export default App;
