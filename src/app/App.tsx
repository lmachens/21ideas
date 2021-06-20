import React, { useState } from 'react';
import styles from './App.module.css';
import placeholder from './components/SearchField/SearchField';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <button onClick={() => alert('Hello World')}>Test me</button>

          <label className={styles.label}>
            <input className={styles.label__input} placeholder={placeholder} />
          </label>
          <Switch>
            <Route path="/search"></Route>
            <Route path="/"></Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
