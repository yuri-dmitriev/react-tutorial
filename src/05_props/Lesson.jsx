import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes

// Node:
Component.propTypes = {
  node: PropTypes.node,
};

// Element:
Component.propTypes = {
  element: PropTypes.element,
};

// Instance Of:
Component.propTypes = {
  instance: PropTypes.instanceOf(Constructor),
};

// One of:
Component.propTypes = {
  elem: PropTypes.oneOf(['val1', 'val2']),
};

// One of type:
Component.propTypes = {
  elem: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

// Array of / Object of:
Component.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string),
  object: PropTypes.objectOf(PropTypes.number),
};

Component.propTypes = {
  object: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number,
    lineHeight: PropTypes.number,
  }),
};

// ===================================================

const Counter = ({counter, func, number, string}) => {
  console.log(counter, func, number, string);
  return <h1>{`Counter component. Counter value is: ${counter}`}</h1>
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  func: PropTypes.func,
  number: PropTypes.number,
  string: PropTypes.string,
};

Counter.defaultProps = {
  func: () => {},
  number: 0,
  string: '',
};

class CounterButton extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState(({counter}) => ({
      counter: ++counter,
    }));
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <div>{counter}</div>
        <Counter
          counter={counter}
        />
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}

export default CounterButton;