import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {addAnswer} from '../actions';

class AddAnswer extends Component {
  state = {
    answer: {
      body: '',
      author: localStorage.getItem('handle')
    }
  };

  onChange = e => {
    e.persist();
    this.setState(prevState => ({
      answer: {
        ...prevState.question,
        [e.target.name]: e.target.value
      }
    }));
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.addAnswer(this.state.answer);

    this.setState({
      answer: {
        body: ''
      }
    });

    this.props.history.push(`/questions/${this.props.match.params.id}`);
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <div className="form-content">
            <div className="form-item">
              <label htmlFor="body">Type Response</label>
              <textarea
                onChange={this.onChange}
                name="body"
                cols="30"
                rows="10"
                value={this.state.answer.body}
                placeholder="Response..."
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
  {addAnswer}
)(AddAnswer);
