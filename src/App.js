import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Name from './components/name';
import Info from './components/info';
import Header from './components/header';
import {Provider} from "react-redux"
import {store} from "./redux/store"


function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <BrowserRouter>
          <Header />
          <Switch>
          <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/name'>
              <Name />
            </Route>
            <Route exact path='/info'>
              <Info />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
