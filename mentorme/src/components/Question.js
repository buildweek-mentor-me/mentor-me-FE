import React from 'react';
import moment from 'moment';

const Question = props => {
  return (
    <div className="Question">
      <div className="header">
        <h2>{props.question.title}</h2>
      </div>
      <div className="body">
        <p>{props.question.author}</p>
        <p>{moment(props.question.created_at).format('MMM Do YY')}</p>
        <p>{props.question.body}</p>
        <p>{props.question.likes} likes</p>
      </div>
    </div>
  );
};

export default Question;
