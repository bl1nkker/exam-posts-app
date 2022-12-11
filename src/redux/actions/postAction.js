import { LOAD_POSTS, CREATE_POST, REMOVE_POST, BOOK_POST } from "../types";
import { DATA } from "../../data";

export const loadPosts = () => {
  return {
    type: LOAD_POSTS,
    payload: DATA,
  };
};

export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};

export const removePost = (id) => {
  return {
    type: REMOVE_POST,
    payload: id,
  };
};

export const bookPost = (post) => {
  return {
    type: BOOK_POST,
    payload: post,
  };
};
