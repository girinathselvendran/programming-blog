import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../src/content/home';
import Programming from '../src/content/programming';
import Jobs from '../src/content/jobs';
import './App.css';

const App = () => {
  return (
    <div className="main-page">
      <div>
        <Router>
          <div className="App-header">
            <ul>
              <li>
                <h2>Programming&nbsp;Blog</h2>
              </li>
              <li>
                <Link to="/programming-blog">Home</Link>
              </li>
              <li>
                <Link to="/programming">Programming</Link>
              </li>
              <li>
                <Link to="/jobs">jobs</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/programming-blog" component={Home} />
            <Route exact path="/programming" component={Programming} />
            <Route exact path="/jobs" component={Jobs} />
          </Switch>
        </Router >
      </div >
    </div>
  );
}

export default App;
