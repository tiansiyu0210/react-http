import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route} from 'react-router-dom';


class Blog extends Component {
    render () {
        return (
            <div>
                <header className="Posts">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts/>
                <Route path="/" exact component={Posts}/>
                {/*<Route path="/" exact render={() => <h1>Home 1</h1>}/>*/}
                {/*<Route path="/"  render={() => <h1>Home 2</h1>}/>*/}
                {/*<section>*/}
                {/*    <FullPost id={this.state.selectedPostId}/>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <NewPost />*/}
                {/*</section>*/}
            </div>
        );
    }
}

export default Blog;