import { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './styles.css';

const withActiveClassName = (Wrapped) => (
  class extends Component {
    render() {
      return <Wrapped activeClassName="active" {...this.props} />
    }
  }
);

const AppLink = withActiveClassName(NavLink);

class Lesson extends Component {
  render() {
    return (
      <Router>
        <nav>
          <AppLink exact to="/">Home</AppLink>
          <AppLink to="/portfolio">Portfolio</AppLink>
          <AppLink to="/contacts">Contacts</AppLink>
        </nav>
      </Router>
    );
  }
}

export default Lesson;
