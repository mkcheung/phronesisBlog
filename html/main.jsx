class Signin extends React.Component {

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
        console.log(this.state.email);
        console.log(this.state.password);
        try {
            const response = await axios.post('/signin', {
              email: this.state.email,
              password: this.state.password
            });
            console.log(response);

        } catch(error) {
            alert(error);
        }
    }

    render() {
        return (
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
        )
    }
}


        ReactDOM.render( 
            <Signin / > ,
            document.getElementById('app')
        );