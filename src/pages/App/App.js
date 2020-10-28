import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import PlantListPage from '../PlantListPage/PlantListPage';
import PlantDetailPage from '../PlantDetailPage/PlantDetailPage';
import AddPlantPage from '../AddPlantPage/AddPlantPage';
import UpdatePlantPage from '../UpdatePlantPage/UpdatePlantPage';
import MessagesPage from '../MessagesPage/MessagesPage';
import MessageBodyPage from '../MessageBodyPage/MessageBodyPage';
import PlantAdoptPage from '../PlantAdoptPage/PlantAdoptPage';
import  * as plantAPI from '../../utils/plantService';
import  * as messageAPI from '../../utils/messageService';
import userService from '../../utils/userService';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
      messages: [],
      user: userService.getUser()
    };
  }

  handleDeleteMessage = async (id) => {
    await messageAPI.deleteOne(id);
    this.setState(
      state => ({
        messages: state.messages.filter( (message) => message._id !== id),
      }),
      () => this.props.history.push('/')
    )
  };

  handleCreateMessage = async (newMessageData) => {
    const newMessage = await messageAPI.create(newMessageData);
    this.setState(
      state => ({ 
        messages: [...state.messages, newMessage],
      }),
       () => this.props.history.push('/')
    );
  }
  
  handleUpdateplant = async (updatedPlantData) => {
    const updatedPlant = await plantAPI.update(updatedPlantData);
    const newPlantsArr = this.state.plants.map( plant => 
      plant._id === updatedPlant._id ? updatedPlant : plant  
    );
    this.setState(
      { plants: newPlantsArr },
      () => this.props.history.push('/plants')
    );
  };

  
  handleDeletePlant = async (id) => {
    await plantAPI.deleteOne(id);
    this.setState(
      state => ({
        plants: state.plants.filter( (plant) => plant._id !== id),
      }),
      () => this.props.history.push('/plants')
    )
  };

  handleAddPlant = async (newPlantData) => {
    const newPlant = await plantAPI.create(newPlantData);
    this.setState(
      state => ({ 
        plants: [...state.plants, newPlant],
      }),
      () => this.props.history.push('/plants')
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
    const messages = await messageAPI.getAll();
    this.setState({ plants, messages });
  }
  
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
        <Navigation 
          handleLogout={this.handleLogout}
          user={this.state.user}
          />
        </nav>
        <header className="App-header">
          {/*may or may not want to render this here...*/}
        {/* {this.state.user ? <h3>Hi, {this.state.user.firstName}!</h3> : <h2>You're Not logged in ☹️</h2> } */}
          </header>
        <Switch>
          <Route exact path="/" render={({location}) => (
          userService.getUser() ?
            <MessagesPage 
              messages={this.state.messages}
              user={this.state.user}
              handleDeleteMessage={this.handleDeleteMessage}
              location={location}
            />
            :
            <Redirect to="/login" />
          )}>
          </Route>
          <Route exact path="/messagebody" render={({ location }) => (
            userService.getUser() ? 
            <MessageBodyPage location={location} /> 
            :
            <Redirect to="/login" />
            )}
          />
          <Route exact path="/plants" render={() => (
          userService.getUser() ?
            <PlantListPage 
              plants={this.state.plants}
              user={this.state.user}
              handleDeletePlant={this.handleDeletePlant}
            />
            :
            <Redirect to="/login" />
          )}>
          </Route>
          <Route exact path="/addplant" render={() => (
            userService.getUser() ?
            <AddPlantPage
              user={this.state.user}
              handleAddPlant={this.handleAddPlant} 
            />
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
          <Route exact path="/details" render={({ location }) => (
            userService.getUser() ? 
            <PlantDetailPage location={location} /> 
            :
            <Redirect to="/login" />
            )}
          />
          <Route exact path="/adopt" render={({ location }) => (
            userService.getUser() ?
            <PlantAdoptPage 
              location={location}
              user={this.state.user}
              handleCreateMessage={this.handleCreateMessage}
            />
            :
            <Redirect to="/login" />
            )}
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
      </div>
    );
  }
}



export default App;
