// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  TODO_LIST_PAGE_ROUTE,
  REDDIT_API_PAGE_ROUTE,
} from '../../routes';

const routes = [
  { route: TODO_LIST_PAGE_ROUTE, label: 'Todo List' },
  { route: REDDIT_API_PAGE_ROUTE, label: 'Reddit Api' },
]
const Nav = () => (
  <nav>
    <ul>
      { routes.map(link => (
             <li key={link.route}>
                <NavLink
                  to={link.route}
                  activeStyle={{ color: 'linegreen' }}
                  exact
                >
                  {link.label}
                </NavLink>
            </li>
        ))
      }
    </ul>
  </nav>
)

export default Nav;