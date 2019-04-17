import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchQuestions} from '../actions/';
import Question from './Question';
import Header from './Header';

class QuestionsList extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }
  render() {
    return (
      <Fragment>
        <Header />
        {!this.props.isFetching &&
          this.props.questions.length >= 0 &&
          this.props.isAuthenticated && (
            <div>
              {this.props.questions.map(q => {
                return (
                  <Question
                    key={q.id}
                    question={q}
                    questions={this.props.questions}
                  />
                );
              })}
            </div>
          )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({questionsReducer, authReducer}) => {
  return {
    questions: questionsReducer.questions,
    isFetching: questionsReducer.isFetching,
    filteredQuestions: questionsReducer.filteredQuestions,
    isAuthenticated: authReducer.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  {fetchQuestions}
)(QuestionsList);
