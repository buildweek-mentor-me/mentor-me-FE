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
        {!this.props.isFetching && this.props.questions.length >= 0 && (
          <div>
            {this.props.questions.map(q => {
              return <Question key={q.id} question={q} />;
            })}
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({fetchQuestionsReducer, filterQuestionReducer}) => {
  return {
    questions: fetchQuestionsReducer.questions,
    isFetching: fetchQuestionsReducer.isFetching,
    filteredQuestions: filterQuestionReducer.filteredQuestions
  };
};

export default connect(
  mapStateToProps,
  {fetchQuestions}
)(QuestionsList);
