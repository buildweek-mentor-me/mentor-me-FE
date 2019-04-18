import React, {Fragment} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteQuestion} from '../actions';

import './Question.css';

class Question extends React.Component {
  render() {
    return (
      <Fragment>
        <Link to={`/questions/${this.props.question.id}`}>
          <div className="Question">
            <div className="header">
              <h3>{this.props.question.title}</h3>
            </div>
            <div className="body">
              <p className="author">asked by • {this.props.question.author}</p>
              <p>
                on {moment(this.props.question.created_at).format('MMM Do YY')}
              </p>
            </div>
            <i class="fas fa-angle-right fa-2x" />
          </div>
        </Link>
      </Fragment>
    );
  }
}

const mapStateToProps = ({questionsReducer}) => {
  return {
    questions: questionsReducer.questions
  };
};

export default connect(
  mapStateToProps,
  {deleteQuestion}
)(Question);
