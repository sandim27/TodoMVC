import React from 'react';

import './assets/comment.scss';

const Comment = ({ comment, indexPhoto, indexComment, removeComment }) => (
  <li>
    <span>
      <img src={comment.avatar} alt="avatar" />
    </span>
    <strong>{comment.name} </strong>
    <i>{comment.text}</i>
    <i
      className="fa fa-times"
      aria-hidden="true"
      onClick={removeComment.bind(null, indexPhoto, indexComment)}
    />
  </li>
);

export default Comment;

Comment.propTypes = {
  comment: React.PropTypes.object,
  indexPhoto: React.PropTypes.number,
  indexComment: React.PropTypes.number,
  removeComment: React.PropTypes.func,
};