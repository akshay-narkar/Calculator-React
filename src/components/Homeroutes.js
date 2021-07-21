import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Main from './Main';
import Nav from './Navbar';
import App from './App';
import Quote from './Quote';
import Error from './Error';

export default function Home() {
  return (
    <>
      <Nav />
      <div className="maindiv">

        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/app" component={App} />
          <Route path="/quote" component={Quote} />
          <Route component={Error} />
        </Switch>
      </div>

    </>
  );
}
