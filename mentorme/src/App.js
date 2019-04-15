import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fecthQuestions} from './actions';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import QuestionsList from './components/QuestionsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Login} />
        <Route
          exact
          path="/questions-list"
          render={props => (
            <QuestionsList {...props} questions={this.props.questions} />
          )}
        />
      </div>
    );
  }
}

const mapStateTopProps = ({fecthQuestionsReducer}) => {
  return {
    questions: fecthQuestionsReducer.questions
  };
};

export default connect(
  mapStateTopProps,
  {fecthQuestions}
)(App);
