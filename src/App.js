import React, { Component } from 'react';
import Create from './components/Create.js';
import Post from './components/Post';
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
    let { pictures } = this.state;
    pictures.reverse();
    return (
      <div>
        <Create addPicture={this.addPicture} />
        {pictures.map((picture, index) =>
        <div key={index}>
          <Post url={picture[0]} title={picture[1]} />
        </div>
        )}
      </div>
    );
  }
}

export default App;
