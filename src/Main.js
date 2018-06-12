import React, {Component} from 'react';
import Hammer from './Hammer';
import AuthorInfo from './AuthorInfo';
import Article from './Article';
import Interaction from './Interaction';
import Clickbait from './Clickbait';
import Comment from './Comment';

class Main extends Component{
    render(){
        return(
            <main className="expanded row">
                <div className="large-8 medium-12 columns article">
                    <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
                    <AuthorInfo />
                    <Article />
                    <Interaction />
                   
                </div>

                <Hammer />

                <div className="small-12 columns other-articles">
                    <h2>From around the Realm</h2>
                    <Clickbait text = "Single Orcs in Indianapolis" alt = "orc" source = "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif" />
                    <Clickbait text = "You won't believe what's under this mountain" alt = "mountain" source = "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg" />
                    <Clickbait text = "Mine 20% more gold with One Weird Trick" alt = "gold" source = "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg" />
                    <Clickbait text = "Surprise for Indiana Hobbits born before 1999" alt = "hobbit" source = "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg" />
                </div>
            </main>
        );
    }

    comment(){
        alert("hey");
    }
}

export default Main;