import React from 'react';

const Post = (props) => {
  return (
    <div>
      <p>{props.title}</p><br />
      <img src={props.url} alt={props.title}></img>
    </div>
  );
}

export default Post;