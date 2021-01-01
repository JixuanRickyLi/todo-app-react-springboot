import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ErrorComponent from "./Components/ErrorComponent";
import FooterComponent from "./Components/FooterComponent";
import HeaderComponent from "./Components/HeaderComponent";
import ListTodosComponent from "./Components/ListTodosComponent";
import WelcomeComponent from "./Components/WelcomeComponent";
import LoginComponent from "./Components/LoginComponent";
import LogoutComponent from "./Components/LogoutComponent";
import AuthenticatedRoute from "./Components/AuthenticatedRoute";
import TodoUpdateComponent from "./Components/TodoUpdateComponent";
import NewTodoComponent from "./Components/NewTodoComponent";


class TodoApp extends Component {

    render() {
        return (
            <div className='TodoApp'>
                <BrowserRouter>
                <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/todos/new" component={NewTodoComponent}/>
                        <AuthenticatedRoute path="/todos/:id" component={TodoUpdateComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                <FooterComponent/>
                </BrowserRouter>
            </div>
        )
    }
}


export default TodoApp;
