import React, { Fragment } from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "../actions/";
import Question from "./Question";
import Header from "./Header";

import "./QuestionsList.css";

class QuestionsList extends React.Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className="QuestionsList">
          <h2>Latest questions </h2>
          <div className="container">
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
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ questionsReducer, authReducer }) => {
  return {
    questions: questionsReducer.questions.sort((a,b) => b.likes - a.likes),
    isFetching: questionsReducer.isFetching,
    filteredQuestions: questionsReducer.filteredQuestions,
    isAuthenticated: authReducer.isAuthenticated
  };
};

export default connect(mapStateToProps, { fetchQuestions })(QuestionsList);
