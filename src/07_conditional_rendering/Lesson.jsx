import React, { Component } from 'react';

const ValidationMsg = ({val}) => {
  if (val >= 10) {
    return <h2>Greater than 10</h2>
  } else {
    return <h3>Less than <em>10</em></h3>
  }
};

class App extends Component {

  render() {
    return (
      <ValidationMsg val={8}/>
    );
  }
}

export default App;
