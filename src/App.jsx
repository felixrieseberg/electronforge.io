import React, { PureComponent } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import TemplatesPage from './components/TemplatesPage';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import PageWrapper from './components/PageWrapper';
import CLIWrapper from './components/CLIWrapper';

export default class App extends PureComponent {
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={PageWrapper}>
          <Route path="/" component={HomePage} />
          <Route path="/cli(/:command)" component={CLIWrapper} />
          <Route path="/templates" component={TemplatesPage} />
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    );
  }
}
