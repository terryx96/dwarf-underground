import React, {Component} from 'react';

class Comment extends Component {
    render(){
        return(
            <form onSubmit = {this.comment.bind(this)}>
                <input type = "text" placeholder = "comment..."></input>
            </form>
        );
    }

    comment(ev){
        ev.preventDefault();
        alert("Hello");
    }
}

export default Comment;