import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import PlantListPage from '../PlantListPage/PlantListPage';
import AddPlantPage from '../AddPlantPage/AddPlantPage';
import Navigation from '../../components/Navigation/Navigation';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
      user: userService.getUser()
    };

  }

  getInitialState = () => {
    // come back and fully code this out when you know what's going on
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null }); 
  }

  /*----lifecycle methods----*/

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
          <Route exact path="/addplant" render={() =>
            userService.getUser() ?
            <AddPlantPage />
            :
            <Redirect to="/login" />
          } />
          <Route exact path="/signup" render={({ history }) =>
            <SignUpPage 
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          } />
          <Route exact path="/login" render={({ history }) =>
            <LogInPage
            handleSignupOrLogin={this.handleSignupOrLogin}
            history={history}
            />
          } />
        </Switch>
        </header>
      </div>
    );
  }
}



export default App;
