import React from "react";
import { getPosts } from "../actions/posts";
import { connect, useDispatch, useSelector } from "react-redux";

// const App = () => {
//   const dispatch = useDispatch();
//   const posts = useSelector((state) => state.posts);
//   return (
//     <div>
//       <button type="submit" onClick={() => dispatch(getPosts())}>
//         Get Posts
//       </button>
//       {posts.allPosts ? <div>posts fetched</div> : <div>no posts</div>}
//     </div>
//   );
// };
// export default App;
class App extends React.Component {
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