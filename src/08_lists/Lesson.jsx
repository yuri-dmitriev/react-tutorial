import React, { Component, Fragment } from 'react';

const Tab1 = () => (
  <h1>Text of Tab1</h1>
);

const Tab2 = () => (
  <h1>Text of Tab2</h1>
);

const Tab3 = () => (
  <h1>Text of Tab3</h1>
);

const people = ['Jack', 'Max', 'Leo', 'Alex'];

const TABS_BTN = [
  {
    dataName: 1,
    title: 'Tab1',
  },
  {
    dataName: 2,
    title: 'Tab2',
  },
  {
    dataName: 3,
    title: 'Tab3',
  },
];

class App extends Component {
  state = {
    activeTab: 1,
  };

  handleTab = (e) => {
    this.setState({
      activeTab: +e.target.getAttribute('data-name'),
    });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <Fragment>
        {TABS_BTN.map(({dataName, title}) => (
          <button
            key={`${dataName}-${title}`}
            data-name={dataName}
            onClick={this.handleTab}
          >{title}</button>
        ))}
        {activeTab === 1 && <Tab1/>}
        {activeTab === 2 && <Tab2/>}
        {activeTab === 3 && <Tab3/>}
        <div>
          {`Active tab is: ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}
        </div>
        <ul>
          {people.map((name, index) => <li key={index}>{name}</li>)}
        </ul>
      </Fragment>
    );
  }
}

export default App;
