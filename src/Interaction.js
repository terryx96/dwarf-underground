import React, {Component} from 'react';
import Form from './Form';
import Comment from './Comment';
class Interaction extends Component{
    constructor(){
        super();
        this.state = {
            visible: false,
            comments: [],
        }
    }
    render(){
        return(
            <div className="article-links">
            <a className="article-link" onClick = {this.setVisible.bind(this)}>
              <i className="fa fa-comments-o"></i>
              <span className="article-link-text">Comments</span>
            </a>
            <a className="article-link" href="#">
              <i className="fa fa-share"></i>
              <span className="article-link-text">Share Post</span>
            </a>
            {this.state.visible ? <Form comment = {this.comment}/> : null}
            <ul id = "commentList">{this.state.comments}</ul>

          </div>
          
    
        );
    }

    
    comment = (body) =>{
        const comments = [...this.state.comments];
        comments.push(<Comment text = {body} />);
        this.setState({comments});
    }

    setVisible(ev){
        ev.preventDefault();
        this.setState({visible: true})
    }


}

export default Interaction;