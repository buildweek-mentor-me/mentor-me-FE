import React from 'react';
import moment from 'moment';
import axiosWithAuth from '../utils/axiosAuth';
import {connect} from 'react-redux';
import {deleteAnswer} from '../actions';

class Answer extends React.Component {
  state = {
    FK_user_id: ''
  };
  componentDidMount() {
    axiosWithAuth()
      .get('https://mentor-mee.herokuapp.com/auth/decode')
      .then(res =>
        this.setState({
          FK_user_id: res.data.subject
        })
      )
      .catch(err => console.log(err));
  }
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
        {this.props.answer.FK_user_id === this.state.FK_user_id && (
          <button onClick={() => this.onDelete(this.props.answer.id)}>
            Delete
          </button>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  {deleteAnswer}
)(Answer);
