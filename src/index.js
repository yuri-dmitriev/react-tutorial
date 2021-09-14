import React from 'react';
import ReactDOM from 'react-dom';
import {Counter, Lesson, Button} from './05_props/Lesson.jsx';

ReactDOM.render(
  <Lesson child={<Button/>}><Counter /></Lesson>,
  document.getElementById('root')
);
