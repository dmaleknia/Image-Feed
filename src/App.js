import React, { Component } from 'react';
import Create from './components/Create.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    }
    this.addPicture = this.addPicture.bind(this);
  }

  addPicture(picture) {
    let { pictures } = this.state;
    pictures.push(picture);
    this.setState({
      pictures
    }, () => console.log('pictures: ', this.state.pictures))
  }

  render() {
    return (
      <div>
        <Create addPicture={this.addPicture} />
      </div>
    );
  }
}

export default App;
