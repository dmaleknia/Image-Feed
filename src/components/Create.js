import React, { Component } from 'react';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: ''
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
      this.setState({
        url: '',
        title: ''
      });
    } else {
      alert('URL and title cannot be empty.')
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
      <form className='form'>
        <label>
          <input id='url' className='field' type='text' value={this.state.url} onChange={this.handleURLChange} placeholder={'Enter URL'} />
        </label>
        <br />
        <div className='bottomForm'>
          <label>
            <input id='title' className='field' type='text' value={this.state.title} onChange={this.handleTitleChange} placeholder={'Title'} />
          </label>
          <button className='button' type="submit me" onClick={this.handleSubmit}>New Post</button>
        </div>
      </form>
    );
  }
}

export default Create;