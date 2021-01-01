import React, {Component} from "react";
import AuthenticationService from "../Services/AuthenticationService";

class LogoutComponent extends Component{

    render(){

        AuthenticationService.logout();

        return (
            <div>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank you for using our Application
                </div>
            </div>
        )
    }
}

export default LogoutComponent;
