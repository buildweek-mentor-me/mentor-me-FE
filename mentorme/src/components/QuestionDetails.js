import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteQuestion} from '../actions';

class QuestionDetails extends Component {
  render() {
    const question = this.props.questions.find(
      q => `${q.id}` === this.props.match.params.id
    );
    return (
      <div>
        <div className="Question">
          <div className="header">
            <h2>{question.title}</h2>
          </div>
          <div className="body">
            <p>{question.author}</p>
            <p>{moment(question.created_at).format('MMM Do YY')}</p>
            <p>{question.body}</p>
            <p>{question.likes} likes</p>
          </div>
          <Link to={`/edit-question/${question.id}`}>Edit</Link>
          <button onClick={() => this.props.deleteQuestion(question.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({questionsReducer, authReducer}) => {
  return {
    questions: questionsReducer.questions,
    isAuthenticated: authReducer.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  {deleteQuestion}
)(QuestionDetails);
