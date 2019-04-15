import React from 'react';
import Question from './Question';

const QuestionsList = props => {
  console.log(props);
  return (
    <div>
      {props.questions.map(q => {
        return <Question key={q.id} question={q} />;
      })}
    </div>
  );
};

export default QuestionsList;
