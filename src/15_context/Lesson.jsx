import React, { Component } from 'react';

class Lesson extends Component{
  render() {
    return (
      <LevelOne title='Hello world!'/>
    );
  }
}

const LevelOne = ({ title }) => <LevelTwo title={title}/>;

const LevelTwo = ({ title }) => <LevelThree title={title} />;

const LevelThree = ({ title }) => <h1>{title}</h1>;

export default Lesson;
