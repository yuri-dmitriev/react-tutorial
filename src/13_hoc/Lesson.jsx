import { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const AppLink = (props) => ({
  render: () => (
    <Link {...props} activeClassName="active" />
  )
});

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
