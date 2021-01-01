import React, {Component} from "react";
import TodoDataService from "../api/todo/TodoDataService";
import AuthenticationService from "../Services/AuthenticationService";

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [ ],
            message: '',
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleNew = this.handleNew.bind(this);
    }

    // when the component is mounted
    componentDidMount() {
        this.refreshTodos();
    }

    refreshTodos(){
        let username = AuthenticationService.getUsername();
        TodoDataService.retrieveAllTodos(username)
            .then(response => {
                    console.log(response.data);
                    this.setState(
                        {todos: response.data}
                    );
                }
            )

    }

    //before exit the component
    componentWillUnmount() {
        console.log("componentWillUnmount")
        this.setState({
            todos: []
        });

    }

    //if return true, component update, else not update
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     // console.log("shouldComponentUpdate")
    //     // console.log(nextProps)
    //     // console.log(nextState)
    //     // console.log(nextContext)
    //     return true
    // }

    handleDelete(event){
        let username = AuthenticationService.getUsername();
        let id = event.target.value;
        TodoDataService.deleteById(username, id)
            .then( response => {
                this.setState({message: `Delete of ${id} successful`})
                this.refreshTodos();
            })
    }

    handleUpdate(event){
        console.log('update'+ event.target.value)
        this.props.history.push(`/todos/${event.target.value}`)
    }

    handleNew(){
        this.props.history.push(`/todos/new`)
    }

    render() {

        let rows = this.state.todos.map(
            (todo) => {
                return (
                    <tr key={todo.id}>
                        <td>{todo.description}</td>
                        <td>{todo.isCompleted===1 ? "Completed" : "Processing"}</td>
                        <td>{todo.targetDate}</td>
                        <td><button className="btn btn-warning" onClick={this.handleDelete} value={todo.id}>Delete</button> </td>
                        <td><button className="btn btn-primary" onClick={this.handleUpdate} value={todo.id}>Update</button></td>
                    </tr>
                )
            }
        )

        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>DESCRIPTION</th>
                            <th>DONE</th>
                            <th>TARGET DATE</th>
                            <th>DELETE?</th>
                            <th>UPDATE?</th>
                        </tr>
                        </thead>
                        <tbody>
                        {rows}
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.handleNew}>Add New Todo</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default ListTodosComponent;
