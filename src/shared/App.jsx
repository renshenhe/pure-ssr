import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import { 
  APP_NAME, 
} from '../shared/config';
import { 
  HOME_PAGE_ROUTE, 
  TODO_LIST_PAGE_ROUTE,
  REDDIT_API_PAGE_ROUTE, 
} from '../shared/routes';
import AsyncApp from './containers/AsyncApp/AsyncApp';
import TodoListPage from './pages/TodoListPage';

import Nav from './components/Nav/Nav';

const App = () => (
  <div>
    <h1>{APP_NAME}</h1>
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <AsyncApp />} />
      <Route exact path={REDDIT_API_PAGE_ROUTE} render={() => <AsyncApp />} />
      <Route path={TODO_LIST_PAGE_ROUTE} render={() => <TodoListPage />} />
    </Switch>
  </div>
);

export default App;

