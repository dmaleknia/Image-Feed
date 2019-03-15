import React from 'react';
import './style.css';

const Post = (props) => {
  return (
    <div className='post'>
      <p className='imageTitle form-font'>{props.title}</p>
      <img className='image' src={props.url} alt={props.title}></img>
    </div>
  );
}

export default Post;
