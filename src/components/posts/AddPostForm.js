import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postActions';

const AddPostForm = ({ addPost }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addPost(title, body)
        setTitle('');
        setBody('');
    }

    return (
        <div class="container p-5 my-5 border">
            <form onSubmit={onSubmit}>
                <label><b>Title: </b></label><br />
                <input class="form-control" type="text" name="title"
                    value={title} placeholder="Post Title"
                    required onChange={(e) => setTitle(e.target.value)} />

                <label><b>Body: </b></label><br />
                <textarea class="form-control" name="body"
                    value={body} placeholder="Post Body"
                    required onChange={(e) => setBody(e.target.value)} />
                <br />
                <button class="btn btn-primary" type="submit">Add Post</button><br />
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    posts: state.posts
})

export default connect(mapStateToProps, { addPost })(AddPostForm);
