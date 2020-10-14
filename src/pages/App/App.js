import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import PlantListPage from '../PlantListPage/PlantListPage';
import PlantDetailPage from '../PlantDetailPage/PlantDetailPage';
import AddPlantPage from '../AddPlantPage/AddPlantPage';
import UpdatePlantPage from '../UpdatePlantPage/UpdatePlantPage';
import  * as plantAPI from '../../utils/plantService';
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

  handleUpdateplant = async (updatedPlantData) => {
    const updatedPlant = await plantAPI.update(updatedPlantData);
    const newPlantsArr = this.state.plants.map( plant => 
      plant._id === updatedPlant._id ? updatedPlant : plant  
    );
    this.setState(
      { plants: newPlantsArr },
      () => this.props.history.push('/')
    );
  };

  
  handleDeletePlant = async (id) => {
    await plantAPI.deleteOne(id);
    this.setState(
      state => ({
        plants: state.plants.filter( (plant) => plant._id !== id),
      }),
      () => this.props.history.push('/')
    )
  }

  handleAddPlant = async (newPlantData) => {
    const newPlant = await plantAPI.create(newPlantData);
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
    const plants = await plantAPI.getAll();
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
        {this.state.user ? <h2>Hi, {this.state.user.name}</h2> : <h2>You're Not logged in ☹️</h2> }
        <Switch>
          <Route exact path="/plants">
            <PlantListPage 
              plants={this.state.plants} 
              handleDeletePlant={this.handleDeletePlant}
            />
          </Route>
          <Route exact path="/addplant" render={() => (
            userService.getUser() ?
            <AddPlantPage handleAddPlant={this.handleAddPlant} />
            :
            <Redirect to="/login" />
          )} />
          <Route exact path="/editplant" render={({ location }) => (
            userService.getUser() ?
            <UpdatePlantPage
              location={location}
              handleUpdatePlant={this.handleUpdateplant}
            />
            :
            <Redirect to="/login" />
          )} />
          <Route exact path="/details" render={({ location }) => 
            <PlantDetailPage location={location} /> }
          />
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
