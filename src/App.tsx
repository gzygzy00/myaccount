import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/money">
            <Money/>
          </Route>
          <Route path="/tags">
            <Tags/>
          </Route>
          <Route path="/statistics">
            <Statistics/>
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Money() {
  return <h2>Money</h2>;
}

function Tags() {
  return <h2>Tags</h2>;
}

function Statistics() {
  return <h2>statistics</h2>;
}

const NoMatch = () => {
  return <div>页面不存在</div>;
};

export default App;