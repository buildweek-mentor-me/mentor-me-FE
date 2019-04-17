import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {editQuestion} from '../actions';

class EditQuestion extends Component {
  state = {
    question: {
      title: this.props.question.title ? this.props.question.title : '',
      body: this.props.question.body ? this.props.question.body : ''
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

    this.setState({
      question: {
        title: '',
        body: ''
      }
    });

    this.props.editQuestion(this.state.question);

    this.props.history.push('/questions');
  };

  render() {
    console.log(this.props.question);
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
            <input type="submit" value="Edit" />
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = ({questionsReducer}, props) => ({
  question: questionsReducer.questions.find(
    q => `${q.id}` === props.match.params.id
  )
});

export default connect(
  mapStateToProps,
  {editQuestion}
)(EditQuestion);
