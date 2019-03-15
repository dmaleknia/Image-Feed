import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    }
  }

  addPicture(picture) {
    this.setState({
      pictures: this.state.picture.concat([ picture ])
    })
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
