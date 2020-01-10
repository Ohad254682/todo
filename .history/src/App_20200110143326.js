import React from 'react';

import {
  Router,
  Switch,
  Route,


} from "react-router-dom";

import { createBrowserHistory } from "history";


import TodoApp from './views/TodoApp.js';
import TodoEdit from './views/TodoEdit.js';
// import TodoDetails from './views/TodoDetails.js'
import 'App.css'

const history = createBrowserHistory();

export default function App(props) {
  return (
    <div className="App">
      <Router history={history}>
        <main>
          <Switch>
            <Route path="/" component={TodoApp} exact></Route>
            {/* <Route path="/:id" component={TodoDetails} exact /> */}
            <Route path="/edit" component={TodoEdit} exact />
            <Route path="/edit/:id" component={TodoEdit} exact />
          </Switch>
        </main>
      </Router>
    </div>
  );
}


