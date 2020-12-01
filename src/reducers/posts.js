import { GET_POSTS } from "../actions/types";

const INITIAL_STATE = {
  allPosts: null,
  allComments: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, allPosts: action.payload };
    default:
      return state;
  }
};
