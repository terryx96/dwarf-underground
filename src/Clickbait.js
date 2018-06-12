import React, {Component} from 'react';

class Clickbait extends Component{
    constructor(){
        super();
        this.state = {
            ads: [
                {name: "Single Orcs in Indianapolis", source: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif", alt: "orc"},
                {},
                {},
                {},
            ],
        }
    }

    render(){
        return(
            <div className="small-6 medium-3 columns other-article">

                <a href="#">
                    <img src={this.props.source} alt={this.props.alt} />
                    <p>{this.props.text}</p>
                </a>   
            </div>
        );
    }
}

export default Clickbait;