import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fecthQuestions} from './actions';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import QuestionsList from './components/QuestionsList';

class App extends Component {
  componentDidMount() {
    this.props.fecthQuestions();
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/questions"
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
