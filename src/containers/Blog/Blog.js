import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import NewPost from './NewPost/NewPost';
import FullPost from "./FullPost/FullPost";
import './Blog.css';
import Posts from './Posts/Posts';
import {Route, NavLink, Switch} from 'react-router-dom';


class Blog extends Component {
    render () {
        return (
            <div>
                <header className="Posts">
                    <nav>
                        <ul>
                            <li><NavLink to="/"
                                         exact
                                         activeClassName="my-active"
                                         activeStyle={{color: 'blue'}}
                            >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post', //<-- absolute path || relative path --> pathname: this.props.match.url + '/new-post'
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/:id" exact component={FullPost} />
                </Switch>

            </div>
        );
    }
}

export default Blog;