import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import SignUp from './SignUp';

class SignIn extends React.Component {

    state = {
        email:'',
        password:''
    }

    handleEmailChange = (event) => {
        this.setState({
            email:event.target.value
        });
    }

    handlePasswordChange = (event) => {
        this.setState({
            password:event.target.value
        });
    }

    signIn = async () => {
        try {
            const response = await axios.post('/signin', {
              email: this.state.email,
              password: this.state.password
            });

        } catch(error) {
            alert(error);
        }
    }

    render() {
        return (
            <div>
                <form className="form-signin">
                    <h2 className="form-signin-heading"> Please sign in </h2>
                    <label for="inputEmail" className="sr-only"> Email address
                    </label>
                    <input type="email" id="inputEmail" className="form-control" onChange={this.handleEmailChange} placeholder="Email address" required autofocus />
                    <label for="inputPassword" className="sr-only"> Password</label>
                    <input type="password" id="inputPassword" className="form-control" onChange={this.handlePasswordChange} placeholder="Password" required />
                    <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button"> Sign in
                    </button>
                </form>
                <div>
                    <Link to="/signup">{'Sign Up'}</Link>
                </div>
            </div>
        )
    }
}

export default SignIn;


