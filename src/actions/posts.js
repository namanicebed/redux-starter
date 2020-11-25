import axios from "axios";
import { GET_POSTS } from "./types";

export const getPosts = () => async (dispatch) => {
  const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");

  dispatch({
    type: GET_POSTS,
    payload: posts.data,
  });
};


