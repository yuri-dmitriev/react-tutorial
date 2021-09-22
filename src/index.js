import React from 'react';
import ReactDOM from 'react-dom';
import App from './18_router_1/Lesson';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './18_router_1/components/home/home';
import Contacts from './18_router_1/components/contacts/contacts';
import Posts from './18_router_1/components/posts/posts';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/posts" component={Posts}/>
      </Switch>
    </App>
  </BrowserRouter>
  ),
  document.getElementById('root')
);
