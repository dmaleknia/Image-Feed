import React, { Component } from 'react';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      title: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    let { url, title } = this.state;
    if (url.length > 0 && title.length > 0) {
      this.props.addPicture([ url, title ]);
    }
  }

  handleURLChange(event) {
    this.setState({ url: event.target.value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.url} onChange={this.handleURLChange} placeholder={'Enter URL'} />
        </label>
        <label>
          <input type="text" value={this.state.title} onChange={this.handleTitleChange} placeholder={'Title'} />
        </label>
        <input type="submit" value="New Post" />
      </form>
    );
  }
}

export default Create;