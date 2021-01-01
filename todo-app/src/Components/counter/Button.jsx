import React,{Component} from "react";

class Button extends Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.handleClickMethod(this.props.by);
    }


    render(){
        return(
            (this.props.by>=0)
                ? <button className="IncreaseButton" key={this.props.by} onClick={this.handleClick}>+{this.props.by}</button>
                : <button className="DecreaseButton" key={this.props.by} onClick={this.handleClick}>{this.props.by}</button>
        )
    }
}

export default Button;
