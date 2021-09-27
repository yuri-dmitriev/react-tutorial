import { Fragment } from 'react';

import Title from './components/title/title';
import Todo from './containers/todo/todo';

const App = () => (
  <Fragment>
    <Title title="TODO App" />
    <Todo />
  </Fragment>
);

export default App;
