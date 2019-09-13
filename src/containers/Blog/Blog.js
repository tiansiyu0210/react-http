import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import asyncComponent from "../../hoc/asyncComponent";

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});


class Blog extends Component {

    state = {
        auth: true
    }

    render () {
        return (
            <div>
                <header className="Posts">
                    <nav>
                        <ul>
                            <li><NavLink to="/posts"
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
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Page Not Found</h1>} />
                    {/*<Redirect from="/" to="/posts"/>*/}
                </Switch>

            </div>
        );
    }
}

export default Blog;