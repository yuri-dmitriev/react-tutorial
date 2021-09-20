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
  render() {
    return (
      <div>
        <span>Text</span>
        <MyPortal>
          <div>TEST PORTAL</div>
        </MyPortal>
      </div>
    );
  }
}

export default Lesson;
