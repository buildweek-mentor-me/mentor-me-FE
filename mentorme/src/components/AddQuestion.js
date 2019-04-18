import React, {Component, Fragment} from 'react';
import axiosWithAuth from '../utils/axiosAuth';
import {connect} from 'react-redux';
import {addQuestion} from '../actions';
import Header from './Header';

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
        <form onSubmit={this.onSubmit}>
          <div className="form-content">
            <div className="form-item">
              <label htmlFor="title">Question title</label>
              <input
                onChange={this.onChange}
                type="text"
                name="title"
                value={this.state.question.title}
                placeholder="Question title..."
              />
            </div>
            <div className="form-item">
              <label htmlFor="body">Question Details</label>
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
  {addQuestion}
)(AddQuestion);
