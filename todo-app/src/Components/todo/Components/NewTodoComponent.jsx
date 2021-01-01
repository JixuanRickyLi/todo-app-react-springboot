import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import moment from "moment";
import AuthenticationService from "../Services/AuthenticationService";
import TodoDataService from "../api/todo/TodoDataService";

class NewTodoComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            description: "",
            targetDate:"",
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    onSubmit(value){
        let username = AuthenticationService.getUsername();

        TodoDataService.createTodo(
            username,
            value.description,
            value.targetDate,
            0
        ).then(
            r =>{
                this.props.history.push(`/todos`)
            }
        )
    }

    validate(values){
        let errors = {}
        if(!values.description){
            errors.description = 'Enter a Description'
        } else if(values.description.length < 5){
            errors.description = ' at least 5 characters in Description'
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a valid date'
        }
        return errors;
    }

    render(){

        let description = this.state.description,
            targetDate=moment(this.state.targetDate).format('YYYY-MM-DD');

        return(
            <div>
                <h1>New Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{description, targetDate}}
                        onSubmit={this.onSubmit}
                        validateOnBlur={false}
                        validateOnChange={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button type="submit" className="btn btn-success">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }


}

export default NewTodoComponent;
