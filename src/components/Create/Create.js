import React, { Component } from 'react';
import Button from '../Button';
import './style.css';

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
        <div className='form-field'>
          <label htmlFor='url'></label>
            <input
                className='form-font'
                name='url'
                type='text'
                value={this.state.url}
                onChange={this.handleURLChange}
                placeholder={'Enter URL'}
            />
        </div>
        <div className="form-field bottom-form">
          <label htmlFor="title"></label>
            <input
                className='form-font'
                name='title'
                type='text'
                value={this.state.title}
                onChange={this.handleTitleChange}
                placeholder={'Title'}
            />
            <Button
                title="New Post"
                onClick={this.handleSubmit}
            />
        </div>
      </form>
    );
  }
}

export default Create;