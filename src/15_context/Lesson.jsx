import React, { Component } from 'react';

const TitleContext = React.createContext();

const LevelThree = () => (
  <TitleContext.Consumer>
    { title => <h1>{title}</h1> }
  </TitleContext.Consumer>
);

const LevelTwo = () => <LevelThree />;

const LevelOne = () => <LevelTwo />;

class Lesson extends Component{
  render() {
    return (
      <TitleContext.Provider value='Hello world!'>
        <LevelOne />
      </TitleContext.Provider>
    );
  }
}

export default Lesson;
