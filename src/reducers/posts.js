import { GET_POSTS } from "../actions/types";

const INITIAL_STATE = {
  allPosts: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { posts: action.payload };
    default:
      return state;
  }
};
