import React, {Component} from 'react'
import './Counter.css'
import Button from './Button'
import PropTypes from 'prop-types'

class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
           counter : 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(by){
        this.setState((prevState)=>
        {
            return {counter: prevState.counter + by,}
        }
        );
    };

    render(){
        const Bylist = [1, 5, 10, -1, -5, -10];
        let elements = Bylist.map((by) =>
            <Button by={by} handleClickMethod = {this.handleClick}/>
        );

        return (
            <div className="Counter">
                {elements} <br/>
                <span className="count">
                    {this.state.counter}
            </span>
            </div>
        )
    }
}

Counter.defaultProps = {
    by : 1
}

Counter.propTypes ={
    by : PropTypes.number
}

export default Counter;
