import React from 'react';
import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Search from './pages/SearchPage/Search';
import styles from './App.module.css';
import RecipePage from './pages/RecipePage/RecipePage';

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: '/', Component: HomePage, exact: true },
  { path: '/search', Component: Search },
  { path: '/recipe', Component: RecipePage },
];

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Switch>
          {routes.map(({ Component, ...routeProps }) => (
            <Route key={routeProps.path} {...routeProps}>
              <Component />
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
