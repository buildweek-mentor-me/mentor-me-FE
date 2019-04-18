import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteQuestion} from '../actions';

import './Question.css';

class Question extends React.Component {
  render() {
    return (
      <div className="Question">
        <div className="header">
          <h3>{this.props.question.title}</h3>
        </div>
        <div className="body">
          <p className="author">Asked by • {this.props.question.author}</p>
          <p>{moment(this.props.question.created_at).format('MMM Do YY')}</p>
        </div>
        <Link to={`/questions/${this.props.question.id}`}>View More</Link>
      </div>
    );
  }
}

const mapStateToProps = ({questionsReducer}) => {
  return {
    questions: questionsReducer.questions
  };
};

export default connect(
  mapStateToProps,
  {deleteQuestion}
)(Question);
