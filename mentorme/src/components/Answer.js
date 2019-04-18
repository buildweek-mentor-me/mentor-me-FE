import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {deleteAnswer} from '../actions';

class Answer extends React.Component {
  onDelete = id => {
    this.props.deleteAnswer(id);
  };
  render() {
    return (
      <div className="Answer">
        <div className="body">
          <p>{this.props.answer.body}</p>
          <p>{this.props.answer.author}</p>
          <p>{moment(this.props.answer.created_at).format('MMM Do YY')}</p>
        </div>
        <button onClick={() => this.onDelete(this.props.answer.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  {deleteAnswer}
)(Answer);
