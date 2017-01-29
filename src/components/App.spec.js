import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const marks = [
  '✖',
  '',
  '●',
  '',
  '✖',
  '',
  '',
  '',
  '',
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App marks={marks} next="●"/>, div);
});
