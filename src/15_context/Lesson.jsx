import React, { Component, Fragment } from 'react';

const TitleContext = React.createContext();

const LevelThree = () => (
  <TitleContext.Consumer>
    { ({ title, subTitle, click}) => (
      <Fragment>
        <h1 onClick={click}>{title}</h1>
        <h2>{subTitle}</h2>
      </Fragment>
    ) }
  </TitleContext.Consumer>
);

const LevelTwo = () => <LevelThree />;

const LevelOne = () => <LevelTwo />;

class Lesson extends Component{
  render() {
    const context = {
      title: 'Hello world!',
      subTitle: 'Hello Vasya!',
      click: () => console.log('Hello!'),
    };

    return (
      <TitleContext.Provider value={context}>
        <LevelOne />
      </TitleContext.Provider>
    );
  }
}

export default Lesson;
