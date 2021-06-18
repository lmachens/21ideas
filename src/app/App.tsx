import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import placeholder from './components/SearchField/SearchField';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />

          <button onClick={() => alert('Hello World')}>Test me</button>

          <label className={styles.label}>
            <input className={styles.label__input} placeholder={placeholder} />
          </label>

          <p>
            <a
              className={styles['App-link']}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className={styles['App-link']}
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
          <Switch>
            <Route path="/about">
              <main>About</main>
            </Route>
            <Route path="/">
              <main>Home</main>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
