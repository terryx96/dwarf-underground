import React, {Component} from 'react';
import Comment from './Comment';
class Form extends Component {
    constructor(){
        super();
        this.state = {
            comments: [],
            text: "",
        }
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.comment(this.state.text);
    }

    handleChange = (ev) => {
        this.setState({text: ev.target.value})
    }

    render(){
        return(
            <span>
            <form onSubmit = {this.handleSubmit}>
                <input type = "text" 
                       id = "commentText" 
                       placeholder = "comment..." 
                       value = {this.state.text}
                       onChange = {this.handleChange}
                       >
                </input>
            </form>
            </span>
        );
    }
}

export default Form;