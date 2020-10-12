import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PlantListPage from '../PlantListPage/PlantListPage';
import AddPlantPage from '../AddPlantPage/AddPlantPage';
import Navigation from '../../components/Navigation/Navigation';
import SignUpPage from '../SignUpPage/SignUpPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };

  }

  getInitialState() {
    // come back and fully code this out when you know what's going on
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null }); 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navigation 
          handleLogout={this.handleLogout}
          user={this.state.user}
        />
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
}



export default App;
