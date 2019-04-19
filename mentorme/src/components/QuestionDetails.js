import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosAuth';
import {deleteQuestion, fetchAnswers, fetchQuestions} from '../actions';
import AnswersList from './AnswersList';
import Header from './Header';

import './QuestionDetails.css';

class QuestionDetails extends Component {
  state = {
    FK_user_id: ''
  };

  componentDidMount() {
    axiosWithAuth()
      .get('https://mentor-mee.herokuapp.com/auth/decode')
      .then(res =>
        this.setState({
          FK_user_id: res.data.subject
        })
      )
      .catch(err => console.log(err));
  }

  onDelete = id => {
    this.props.deleteQuestion(id).then(() => this.props.fetchAnswers());
  };

  render() {
    console.log(this.props.questions);
    const question = this.props.questions.find(
      q => `${q.id}` === this.props.match.params.id
    );

    return (
      <div>
        <Header />
        <div className="QuestionDetails">
          <div className="title">
            <div className="header">
              <h2>{question.title}</h2>
            </div>
            <Link to={`/questions/${question.id}/add-answer`}>
              <i className="fas fa-plus" /> Add answer
            </Link>
          </div>
          <div className="body">
            <p className="body">{question.body}</p>
            <div className="details">
              <div className="info">
                <p className="author">asked by • {question.author}</p>
                <p>on {moment(question.created_at).format('MMM Do YY')}</p>
              </div>
              <div className="buttons">
                {question.FK_user_id === this.state.FK_user_id && (
                  <Link to={`/edit-question/${question.id}`}>
                    <i className="fas fa-edit" />
                  </Link>
                )}
                {question.FK_user_id === this.state.FK_user_id && (
                  <Link
                    onClick={() => this.onDelete(question.id)}
                    to="/questions"
                  >
                    <i className="far fa-trash-alt" />
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="answer-title">
            <h4>Answers</h4>
          </div>
          <div className="answers-list" />
          <AnswersList answers={this.props.questions.answers} {...this.props} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({questionsReducer, answersReducer, authReducer}) => {
  return {
    questions: questionsReducer.questions,
    isAuthenticated: authReducer.isAuthenticated,
    answers: answersReducer.answers
  };
};

export default connect(
  mapStateToProps,
  {deleteQuestion, fetchAnswers, fetchQuestions}
)(QuestionDetails);
