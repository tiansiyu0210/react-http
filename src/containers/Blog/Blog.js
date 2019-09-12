import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

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
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost}/>
            </div>
        );
    }
}

export default Blog;