import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchQuestions} from '../actions/';
import Question from './Question';
import Header from './Header';

import './QuestionsList.css';

class QuestionsList extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }
  render() {
    return (
      <div className="QuestionsList">
        <Header />
        <h2>Latest Questions </h2>
        {this.props.isAuthenticated &&
          !this.props.isFetching &&
          this.props.filteredQuestions.length >= 0 && (
            <div>
              {this.props.filteredQuestions.map(q => {
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
      </div>
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
