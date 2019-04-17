import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteQuestion} from '../actions';

class Question extends React.Component {
  render() {
    return (
      <div className="Question">
        <div className="header">
          <h2>{this.props.question.title}</h2>
        </div>
        <div className="body">
          <p>{this.props.question.author}</p>
          <p>{moment(this.props.question.created_at).format('MMM Do YY')}</p>
          <p>{this.props.question.body}</p>
          <p>{this.props.question.likes} likes</p>
        </div>
        <Link to={`/edit-question/${this.props.question.id}`}>Edit</Link>
        <button
          onClick={() => this.props.deleteQuestion(this.props.question.id)}
        >
          Delete
        </button>
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
