import { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const withActiveClassName = (Wrapped) => (
  class extends Component {
    render() {
      return <Wrapped {...this.props} activeClassName="active">{this.props.children}</Wrapped>
    }
  }
);

const AppLink = withActiveClassName(Link);

class Lesson extends Component {
  render() {
    return (
      <Router>
        <nav>
          <AppLink to="/">Home</AppLink>
          <AppLink to="/portfolio">Portfolio</AppLink>
          <AppLink to="/contacts">Contacts</AppLink>
        </nav>
      </Router>
    );
  }
}

export default Lesson;
