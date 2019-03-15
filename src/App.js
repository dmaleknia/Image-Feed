import React, { Component } from 'react';
import Create from './components/Create/Create';
import Post from './components/Post/Post';
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
    });
  }

  render() {
    const { pictures } = this.state;
    return (
      <div>
        <Create addPicture={this.addPicture} />
        {pictures.reverse().map((picture, index) =>
          <div key={index}>
            <Post url={picture[0]} title={picture[1]} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
