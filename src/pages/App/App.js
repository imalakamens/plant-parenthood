import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import PlantListPage from '../PlantListPage/PlantListPage';
import AddPlantPage from '../AddPlantPage/AddPlantPage';
import plantService from '../../utils/plantService';
import userService from '../../utils/userService';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
      user: userService.getUser()
    };
  }

  handleAddPlant = async (newPlantData) => {
    const newPlant = await plantService.create(newPlantData);
    this.setState(
      state => ({ 
        plants: [...state.plants, newPlant],
      }),
      () => { 
        console.log(this.props)
        this.props.history.push('/')}
    );
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null }); 
  };

  /*----lifecycle methods----*/

  async componentDidMount() {
    const plants = await plantService.getAll();
    this.setState({ plants });
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
            <PlantListPage plants={this.state.plants} />
          </Route>
          <Route exact path="/addplant" render={() => (
            userService.getUser() ?
            <AddPlantPage handleAddPlant={this.handleAddPlant} />
            :
            <Redirect to="/login" />
          )} />
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
