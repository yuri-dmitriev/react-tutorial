import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyPortal extends Component {
  el = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

class Lesson extends Component {
  state = {
    clicks: 0,
  };

  handleClick = () => {
    this.setState(({ clicks }) => ({
        clicks: ++clicks,
    }));
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Clicks {this.state.clicks}</p>
        <span>Text</span>
        <MyPortal>
          <div>TEST PORTAL</div>
          <button>+1</button>
        </MyPortal>
      </div>
    );
  }
}

export default Lesson;
