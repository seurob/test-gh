import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts, deletePost } from '../../actions/postActions';
import AddPostForm from './AddPostForm';

const Home = ({ posts, getPosts, deletePost }) => {

    useEffect(() => {
        getPosts();
        //eslint-disable-next-line
    }, []);

    const postView = () => {
        if (posts) {
            return (
                <>
                    <div class="container p-5 my-5 border">
                        <h1>Add Posts <small> (testing redux) </small></h1>
                        {posts.map(post =>
                            <div key={post.id} className="col s12 m5">
                                <ul class="list-group">
                                    <li class="list-group-item list-group-item-secondary">{post.id} - {post.title}</li>
                                    <li class="list-group-item">{post.body}</li>
                                </ul>
                                <br />
                                <button class="btn btn-primary text-center" onClick={() => deletePost(post.id)}>Delete post</button>
                                <br /><br /><br />
                            </div>
                            
                        )}
                    </div>
                </>
            )
        } else {
            return (
                <h4>No posts...</h4>
            )
        }
    };

    return (
        <div className="container center">
            <AddPostForm />
            {postView()}
        </div>
    )
}



const mapStateToProps = (state) => ({
    posts: state.posts
})

export default connect(mapStateToProps, { getPosts, deletePost })(Home);
