import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteQuestion, fetchAnswers} from '../actions';
import AnswersList from './AnswersList';

class QuestionDetails extends Component {
  componentDidMount() {
    // this.props.fetchAnswers();
    // console.log(this.props);
  }

  onDelete = id => {
    this.props.deleteQuestion(id);
  };

  render() {
    console.log(this.props.questions);
    const question = this.props.questions.find(
      q => `${q.id}` === this.props.match.params.id
    );

    console.log(this.props);
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
          <Link onClick={() => this.onDelete(question.id)} to="/questions">
            Delete
          </Link>
          <Link to={`/questions/${question.id}/add-answer`}>
            Add your answer
          </Link>
          <div className="answers-list" />
          <AnswersList answers={this.props.questions.answers} {...this.props} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({questionsReducer, answersReducer, authReducer}) => {
  console.log(questionsReducer);
  return {
    questions: questionsReducer.questions,
    isAuthenticated: authReducer.isAuthenticated,
    answers: answersReducer.answers
  };
};

export default connect(
  mapStateToProps,
  {deleteQuestion, fetchAnswers}
)(QuestionDetails);
