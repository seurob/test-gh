import React, { Component } from "react";

// redux imports
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { createPost } from "../../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.createPost(post);
  }

  render() {
    return (
      <>
        <div class="container p-5 my-5 border">
          <h1>Add Posts <small> (testing redux) </small></h1>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>Title: </label><br />
              <input class="form-control" type="text" name="title" onChange={this.onChange} value={this.state.title} required />
            </div>
            <div>
              <label>Body: </label><br />
              <textarea class="form-control" name="body" onChange={this.onChange} value={this.state.body} required />
            </div><br />
            <button class="btn btn-primary" type="submit">Post</button>
          </form>
        </div>
      </>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
