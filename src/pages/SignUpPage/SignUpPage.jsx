import React, { Component } from 'react';
import userService from '../../utils/userService'
import './SignUpPage.css'

class SignUpPage extends Component {
    state= {
        invalidForm: true,
        formData: {
            first_name: '',
            last_name:'',
            email: '',
            password: '',
            message: ''
        }
    };

    formRef = React.createRef();

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await userService.signup({
            first_name: this.state.formData.name,
            last_name: this.state.formData.last_name,
            email: this.state.formData.email,
            password: this.state.formData.password
          });
    
          this.props.handleSignupOrLogin();
          
          this.props.history.push('/');
        } catch (err) {
          this.updateMessage(err.message);
        }
      };

    handleChange = (e) => {
        const formData = {
            ...this.state.formData,
            [e.target.name]: e.target.value,
        };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity(),
        });
    };  

    updateMessage = (msg) => {
        this.setState({ message: msg });
    };

    render() {
        return (
            <div className="SignUpPage">
                <h1>Sign Up</h1>
                        <form
                        ref={this.formRef}
                        autoComplete="off"
                        onSubmit={this.handleSubmit}
                        >
                        <div className="form-group">
                            <label>First name (required)</label>
                            <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.first_name}
                            onChange={this.handleChange}
                            required
                            />
                            <label>Last name</label>
                            <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.last_name}
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Your email (required)</label>
                            <input
                            className="form-control"
                            name="email"
                            value={this.state.formData.email}
                            onChange={this.handleChange}
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label>Your password</label>
                            <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={this.state.formData.password}
                            onChange={this.handleChange}
                            />
                        </div>
                            <button
                            className="btn"
                            disabled={this.state.invalidForm}
                            >
                            SIGN UP
                            </button>
                        </form>
            </div>
        );
    }
}

export default SignUpPage;