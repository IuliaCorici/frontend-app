import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Name from './components/name';
import Info from './components/info';
import Header from './components/header';


function App() {
  return (
    <div className="App">
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

      
    </div>
  );
}

export default App;
