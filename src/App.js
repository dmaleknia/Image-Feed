import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    }
  }
  render() {
    return (
      <div>
        hello from app!
      </div>
    );
  }
}

export default App;
