import React, {Component} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosAuth';
import {deleteQuestion, fetchAnswers} from '../actions';
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
    this.props.deleteQuestion(id);
  };

  render() {
    console.log(this.props.questions);
    const question = this.props.questions.find(
      q => `${q.id}` === this.props.match.params.id
    );

    console.log(question);
    return (
      <div>
        <Header />
        <div className="QuestionDetails">
          <div className="header">
            <h2>{question.title}</h2>
          </div>
          <div className="body">
            <p className="body">{question.body}</p>
            <div className="details">
              <p className="author">asked by • {question.author}</p>
              <p>{moment(question.created_at).format('MMM Do YY')}</p>
            </div>
            <p className="likes">{question.likes} likes</p>
          </div>
          {question.FK_user_id === this.state.FK_user_id && (
            <Link to={`/edit-question/${question.id}`}>Edit</Link>
          )}
          {question.FK_user_id === this.state.FK_user_id && (
            <Link onClick={() => this.onDelete(question.id)} to="/questions">
              Delete
            </Link>
          )}
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
