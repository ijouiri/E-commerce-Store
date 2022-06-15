import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    this.state = {
      number: 28
    }
  }

  handleChange = () => {
    this.setState((prevState, prevProps) => (
      { number: prevState.number + 1 }
    ))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.number}
          </p>

          <button onClick={this.handleChange}>Change Number</button>
        </header>
      </div>
    )
  }


}

export default App;
