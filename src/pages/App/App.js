import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PlantListPage from '../PlantListPage/PlantListPage';
import AddPlantPage from '../AddPlantPage/AddPlantPage';
import Navigation from '../../components/Navigation/Navigation';
import SignUpPage from '../SignUpPage/SignUpPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation />
      <Switch>
        <Route exact path="/plants">
          <PlantListPage />
        </Route>
        <Route exact path="/addplant">
          <AddPlantPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
      </header>
    </div>
  );
}

export default App;