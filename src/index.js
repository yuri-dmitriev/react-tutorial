import React from 'react';
import ReactDOM from 'react-dom';
import App from './19_router_2/Lesson';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './19_router_2/components/home/home';
import Contacts from './19_router_2/components/contacts/contacts';
import Posts from './19_router_2/components/posts/posts';
import Post from './19_router_2/components/post/post';


ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contacts" component={Contacts}/>
        <Route exact path="/posts" component={Posts}/>
        <Route path="/posts/:id" component={Post}/>
      </Switch>
    </App>
  </BrowserRouter>
  ),
  document.getElementById('root')
);
