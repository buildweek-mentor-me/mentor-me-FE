import React from 'react';
import moment from 'moment';
import axiosWithAuth from '../utils/axiosAuth';
import {connect} from 'react-redux';
import {deleteAnswer} from '../actions';

import './Answer.css';

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
          <div className="info">
            <p className="author">{this.props.answer.author}</p>
            <p>{moment(this.props.answer.created_at).format('MMM Do YY')}</p>
          </div>
          <div className="content">
            <p>{this.props.answer.body}</p>
            {this.props.answer.FK_user_id === this.state.FK_user_id && (
              <button
                className="btn"
                onClick={() => this.onDelete(this.props.answer.id)}
              >
                <i class="far fa-trash-alt fa-lg" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {deleteAnswer}
)(Answer);
