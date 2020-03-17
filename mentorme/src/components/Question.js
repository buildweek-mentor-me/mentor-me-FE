import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteQuestion, upvote } from "../actions";
import { fetchQuestions } from "../actions/";

import "./Question.css";

class Question extends React.Component {
  onUpvote = e => {
    e.preventDefault();
    this.props.upvote(this.props.question.id);
    setTimeout(this.props.fetchQuestions(), 2000);
  };

  render() {
    return (
      <div className="question-hub">
        <div className="upvote">
          <i onClick={this.onUpvote} class="fas fa-chevron-circle-up fa-2x" />

          <div className="like-count">{this.props.question.likes}</div>
        </div>

        <Link to={`/questions/${this.props.question.id}`}>
          <div className="Question">
            <div className="header">
              <h3>{this.props.question.title}</h3>
            </div>
            <div className="body">
              <p className="author">asked by • {this.props.question.author}</p>
              <p>
                on {moment(this.props.question.created_at).format("MMM Do YY")}
              </p>
            </div>
            <i className="fas fa-angle-right fa-2x" />
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ questionsReducer }) => {
  return {
    questions: questionsReducer.questions
  };
};

export default connect(mapStateToProps, {
  deleteQuestion,
  upvote,
  fetchQuestions
})(Question);
