import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './LogInPage.css'

class LogInPage extends Component {
    state = {
        email:'',
        password: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            // CHANGE THIS MESSAGE BEFORE FINAL VERSION
            alert('Invald login message (this should not be in final version)');
        }
    }

    render() {
        return (
          <div className="LogInPage">
            <header>Log In</header>
            <form onSubmit={this.handleSubmit} >
              <div>
                <div>
                  <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                </div>
              </div>
              <div>
                <div>
                  <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                </div>
              </div>
              <div>
                <div>
                  <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
                  <Link to='/'>Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        );
      }
}

export default LogInPage;