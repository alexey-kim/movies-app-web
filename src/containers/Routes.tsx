import { Router } from '@reach/router';
import * as React from 'react';
import { Constants } from '../constants';
import { LazyContainer } from './LazyContainer';

const allMoviesPage = process.env.NODE_ENV === 'production'
  ? React.lazy(() => import(/* webpackChunkName: 'all-movies-page' */ '../pages/AllMoviesPage'))
  : require('../pages/AllMoviesPage').default; // tslint:disable-line: no-var-requires no-require-imports

const pages = [
  [Constants.ROUTES.ALL_MOVIES, allMoviesPage]
] as const;

export const Routes: React.FC = () => {
  return (
    <Router>
      {pages.map(([path, component]) => <LazyContainer key={path} path={path} component={component} />)}
    </Router>
  );
};
