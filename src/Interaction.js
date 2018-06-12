import React, {Component} from 'react';
import Comment from './Comment';
class Interaction extends Component{
    constructor(){
        super();
        this.state = {
            visible: false,
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
            {this.state.visible ? <Comment /> : null}
          </div>
          
    
        );
    }

    setVisible(ev){
        ev.preventDefault();
        this.setState({visible: true})
    }


}

export default Interaction;