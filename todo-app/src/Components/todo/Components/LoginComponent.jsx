import React, {Component} from "react";
import AuthenticationService from "../Services/AuthenticationService";

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleInput(e) {
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleLogin() {
        AuthenticationService.executeJwtAuthentication(this.state.username, this.state.password)
            .then(
                (response) => {
                    AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token);
                    this.setState({
                            showSuccessMessage: true,
                            hasLoginFailed: false,
                        }
                    );
                    //react router history API
                    this.props.history.push(`/welcome/${this.state.username}`);
                }
            )
            .catch(
                () => {
                    this.setState({
                        showSuccessMessage: false,
                        hasLoginFailed: true,
                    })
                }
            );

        // AuthenticationService.executeBasicAuthentication(this.state.username, this.state.password)
        //     .then(
        //         () => {
        //             AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //             this.setState({
        //                     showSuccessMessage: true,
        //                     hasLoginFailed: false,
        //                 }
        //             );
        //             //react router history API
        //             this.props.history.push(`/welcome/${this.state.username}`);
        //         }
        //     )
        //     .catch(
        //         () => {
        //             this.setState({
        //                 showSuccessMessage: false,
        //                 hasLoginFailed: true,
        //             })
        //         }
        //     );
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {/*<ShowLoginSuccessMessage showSuccessMessage = {this.state.showSuccessMessage}/>*/}

                    {/*Conditional Rendering*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    <div>
                        Name:
                        <input
                            type='text'
                            name='username'
                            onChange={this.handleInput}
                            value={this.state.username}
                            placeholder='Enter Your Username'
                        />
                        Password:
                        <input
                            type='password'
                            name='password'
                            onChange={this.handleInput}
                            value={this.state.password}
                        />
                        <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent;
