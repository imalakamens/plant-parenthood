import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Plants from '../Plants/Plants';
import AddPlant from '../AddPlant/AddPlant';
import Navigation from '../../components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation />
      <Switch>
        <Route exact path='/plants'>
          <Plants />
        </Route>
        <Route exact path='/addplant'>
          <AddPlant />
        </Route>
      </Switch>
      </header>
    </div>
  );
}

export default App;
