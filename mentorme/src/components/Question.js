import React, {Fragment} from 'react';

const Question = props => {
  console.log(props);
  return (
    <Fragment>
      {props.question && (
        <div className="Question">
          <div className="header">
            <h2>{props.title}</h2>
          </div>
          <div className="body">
            <p>{props.author}</p>
            <p>{props.timestamp}</p>
            <p>{props.body}</p>
            <p>{props.likes}</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Question;
