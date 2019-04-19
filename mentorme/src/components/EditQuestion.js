import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {editQuestion, fetchQuestions} from '../actions';
import Header from './Header';

class EditQuestion extends Component {
  state = {
    question: {
      title: this.props.question.title ? this.props.question.title : '',
      body: this.props.question.body ? this.props.question.body : '',
      id: this.props.question.id ? this.props.question.id : '',
      FK_user_id: this.props.question.FK_user_id
        ? this.props.question.FK_user_id
        : ''
    }
  };
  componentDidMount() {
    this.props.fetchQuestions();
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
    const id = this.props.match.params.id;
    this.props.editQuestion(this.props.match.params.id, this.state.question);

    this.setState({
      question: {
        title: '',
        body: ''
      }
    });
    this.props.fetchQuestions();
    this.props.history.push(`/questions`);
  };

  render() {
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
                placeholder="Edit title..."
              />
            </div>
            <div className="form-item">
              <label htmlFor="body">Edit Details</label>
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
            <Link to={`/questions/${this.props.match.params.id}`}>Cancel</Link>
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
  {editQuestion, fetchQuestions}
)(EditQuestion);
