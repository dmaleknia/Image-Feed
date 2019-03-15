import React from 'react';

const Post = (props) => {
  return (
    <div className='post'>
      <p className='imageTitle'>{props.title}</p><br />
      <img className='image' src={props.url} alt={props.title}></img>
    </div>
  );
}

export default Post;