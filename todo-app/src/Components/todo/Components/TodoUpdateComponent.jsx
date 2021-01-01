import React, {Component} from "react";
import TodoDataService from "../api/todo/TodoDataService";
import AuthenticationService from "../Services/AuthenticationService";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import moment from "moment";

class TodoUpdateComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
                id: null,
                username: '',
                description: 'Sample Description',
                targetDate: moment(new Date()).format('YYYY-MM-DD'),
                completed: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
             TodoDataService.findById(AuthenticationService.getUsername(), this.props.match.params.id)
            .then(response => {
                    this.setState(response.data)
                }
            )
    }

    handleChange(event){
        console.log(event.target.name, event.target.value)
        this.setState(
            {[event.target.name] : event.target.value}
        )
    }



    handleSubmit(event){
        let username = this.state.username;
        let id = this.state.id;
        let description = this.state.description;
        let isCompleted = this.state.completed? 1 : 0;
        let targetDate = this.state.targetDate;
        console.log(username, id, description, isCompleted, targetDate);
        TodoDataService.updateById(id, username, description, targetDate, isCompleted)
            .then(
                r =>{
                    this.props.history.push(`/todos`)
                } )
    }

    render() {

        return (
            <div>
                <h1>Todo</h1>
                <form>
                    <table className="table table-light">
                        <thead>
                            <tr><th colSpan="2"> <div className="container"> Todo Component id - {this.props.match.params.id}</div></th></tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td> Description:</td>
                            <td><input type="text" name="description" value={this.state.description} onChange={this.handleChange}/></td>
                        </tr>
                        <tr>
                            <td> Target Date:</td>
                            <td><input type="date" name="targetDate"  defaultValue={this.state.targetDate} onChange={this.handleChange} /></td>
                        </tr>
                        <tr>
                            <td> Complete:</td>
                            <td>
                                <BootstrapSwitchButton
                                checked={this.state.completed}
                                onlabel="YES"
                                offlabel="NO"
                                onChange={(checked) => {
                                    this.setState({ completed: checked })
                                }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2"><input type="button" onClick={this.handleSubmit} value="OK" className="btn btn-success"/></td>
                        </tr>
                        </tbody>


                    </table>
                </form>
            </div>
        )
    }

}

export default TodoUpdateComponent;
