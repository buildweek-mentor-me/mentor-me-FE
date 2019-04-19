import React, {Component, Fragment} from 'react';
import axiosWithAuth from '../utils/axiosAuth';
import {connect} from 'react-redux';
import {addQuestion, fetchQuestions} from '../actions';
import Header from './Header';

import './AddQuestion.css';

class AddQuestion extends Component {
  state = {
    question: {
      title: '',
      body: '',
      author: '',
      FK_user_id: null
    }
  };

  componentDidMount() {
    axiosWithAuth()
      .get('https://mentor-mee.herokuapp.com/auth/decode')
      .then(res =>
        this.setState(prevState => ({
          question: {
            ...prevState.question,
            author: res.data.handle,
            FK_user_id: res.data.subject
          }
        }))
      )
      .catch(err => console.log(err));
  }
  onChange = e => {
    e.persist();
    this.setState(prevState => ({
      question: {
        ...prevState.question,
        [e.target.name]: e.target.value
      }
    }));
  };
  componentWillUnmount() {
    this.props.fetchQuestions();
  }

  onSubmit = e => {
    e.preventDefault();

    this.props.addQuestion(this.state.question);

    this.setState({
      question: {
        title: '',
        body: ''
      }
    });
    this.props.history.push('/questions');
  };

  render() {
    console.log(this.state.question.author);
    return (
      <Fragment>
        <Header />
        <form className="AddQuestion" onSubmit={this.onSubmit}>
          <div className="form-content">
            <div className="form-item">
              <input
                onChange={this.onChange}
                type="text"
                name="title"
                value={this.state.question.title}
                placeholder="Add question..."
              />
            </div>
            <div className="form-item">
              <label htmlFor="body">Give more details</label>
              <textarea
                onChange={this.onChange}
                name="body"
                cols="30"
                rows="10"
                value={this.state.question.body}
                placeholder="Details..."
              />
            </div>
            <input type="submit" value="Add" />
          </div>
        </form>
      </Fragment>
    );
  }
}

export default connect(
  null,
  {addQuestion, fetchQuestions}
)(AddQuestion);
