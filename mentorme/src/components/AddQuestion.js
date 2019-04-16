import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {addQuestion} from '../actions';

class AddQuestion extends Component {
  state = {
    question: {
      title: '',
      body: '',
      author: localStorage.getItem('handle'),
      FK_user_id: localStorage.getItem('userId')
    }
  };

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
    return (
      <Fragment>
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
