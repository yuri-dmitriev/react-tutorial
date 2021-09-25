import { Component } from 'react';
import LoadingHOC from './loadingHOC/loadingHOC';

/*
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
*/

class AppComponentUI extends Component {
  render() {
    return (
      <div>{this.props.data.title}</div>
    );
  }
}

const AppComponent = LoadingHOC(AppComponentUI, 'data');

class Lesson extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(data => this.updateState(data));
  }

  updateState = (data) => {
    setTimeout(() => {
      this.setState({ data });
    }, 3000);
  };

  render() {
    return (
      <AppComponent data={this.state.data} />
    );
  }
}

export default Lesson;
