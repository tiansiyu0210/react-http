import React, { Component } from "react";
import axios from "../../../axios";
import Post from '../../../components/Post/Post'
import classes from './Posts.module.css'
import FullPost from "../FullPost/FullPost";
import {Route} from "react-router-dom";
//import {Link} from 'react-router-dom'

class Posts extends Component{
    state = {
        posts: []
    }

    componentDidMount() {
        console.log('[Posts] componentDidMount')
        console.log(this.props)
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(
                    post => {
                        return {
                            ...post,
                            author: 'Tian'
                        }
                    }
                )
                this.setState({posts: updatedPosts});
                console.log(response);
            })
            .catch( error => {
                console.log(error);
                //this.setState({error: true})
            })
    }

    postSelectedHandler = (id) => {
        //this.setState({selectedPostId: id});
        this.props.history.push({pathname: '/posts/' + id});
        //this.props.history.push('/' + id);
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>something went wrong</p>;

        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return (//<Link key={post.id} to={'/' + post.id}>
                            <Post
                                key={post.id}
                                title={post.title}
                                author={post.author}
                                clicked={() => this.postSelectedHandler(post.id)}
                            />)
                        //</Link>)
            });
        }

        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;