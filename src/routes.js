import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import HomePage from './components/HomePage'
import ClientsPage from './components/ClientsPage'
import ClientPage from './components/ClientPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="clients" component={ClientsPage}/>
    <Route path="client" component={ClientPage}/>
    <Route path="client/:id" component={ClientPage}/>
  </Route>
);
