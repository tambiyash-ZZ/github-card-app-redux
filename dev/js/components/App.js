import React, { Component } from 'react';
import Members from '../containers/Members';
import '../../style/bootstrap/bootstrap.css';
import '../../style/App.css';
import logo from '../../style/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Github User Cards</h2>
          </div>
        </header>
        <div id="appTitle" className="container">
            <Members className="members"/>
        </div>
        <footer>
          <b>React Web Design</b>, Copyright &copy; 2017
        </footer>
      </div>
    );
  }
}

export default App;
