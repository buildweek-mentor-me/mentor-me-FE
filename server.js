const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

let questions = [
  {
    id: 1,
    title: 'Is it just me, or is CSS too hard?',
    body:
      'It is really bad design, if you can even call it design.CSS has far too many ways to achieve the same thing, and the syntax is gibberish. Often in CSS you can specify arguments in no particular order, or just leave them out.',
    timestamp: '1 hour ago',
    author: 'John doe, Front-End Engineer student at Lambda School',
    likes: '16',
    answers: '24'
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const {authorization} = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({error: 'User need to be logged in to do that.'});
  }
}

app.post('/api/signin', (req, res) => {
  const {handle, password} = req.body;
  if (handle === 'steve' && password === '123') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({error: 'Email or Password incorrect. Please see Readme'});
  }
});

app.get('/api/questions', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(questions);
  }, 1000);
});

app.get('/api/questions/:id', authenticator, (req, res) => {
  const question = questions.find(q => q.id == req.params.id);

  if (question) {
    res.status(200).json(question);
  } else {
    res.status(404).send({msg: 'Questions not found'});
  }
});

app.post('/api/questions', authenticator, (req, res) => {
  const question = {id: getNextId(), ...req.body};

  questions = [...questions, question];

  res.send(questions);
});

app.put('/api/questions/:id', authenticator, (req, res) => {
  const {id} = req.params;

  const questionIndex = questions.findIndex(q => q.id == id);

  if (questionIndex > -1) {
    const questions = {...questions[questionIndex], ...req.body};

    questions = [
      ...questions.slice(0, questionIndex),
      friend,
      ...questions.slice(questionIndex + 1)
    ];
    res.send(questions);
  } else {
    res.status(404).send({msg: 'Questions not found'});
  }
});

app.delete('/api/questions/:id', authenticator, (req, res) => {
  const {id} = req.params;

  questions = questions.filter(q => q.id !== Number(id));

  res.send(questions);
});

function getNextId() {
  return nextId + 1;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
