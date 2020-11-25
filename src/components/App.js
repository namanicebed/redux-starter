import React from "react";
import axios from "axios";
import { getPosts } from "../actions/posts";
import { connect } from "react-redux";

class App extends React.Component {
  //   state = {
  //     posts: null,
  //   };
  //   getPosts = async () => {
  //     const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     this.setState({ posts: posts.data });
  //   };
  render() {
    return (
      <div>
        <button type="submit" onClick={() => this.props.getPosts()}>
          Get Posts
        </button>
        {this.props.posts.allPosts ? (
          <div>posts fetched</div>
        ) : (
          <div>no posts</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return { posts: state.posts };
};

export default connect(mapStateToProps, { getPosts })(App);
