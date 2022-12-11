import { LOAD_POSTS, CREATE_POST, REMOVE_POST, BOOK_POST } from "../types";

const intialState = {
  allPosts: [],
  bookedPosts: [],
};

export const postReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      console.log(action.payload);
      return {
        ...state,
        allPosts: [{ ...action.payload }, ...state.allPosts],
      };
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        bookedPosts: action.payload.filter((post) => post.booked),
      };

    case REMOVE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter((post) => post.id !== action.payload),
        bookedPosts: state.bookedPosts.filter(
          (post) => post.id !== action.payload
        ),
      };
    case BOOK_POST:
      const updatedPosts = state.allPosts.map((post) => {
        if (post.id === action.payload.id) {
          post.booked = !post.booked;
        }
        return post;
      });
      return {
        ...state,
        allPosts: updatedPosts,
        bookedPosts: updatedPosts.filter((post) => post.booked),
      };

    default:
      return state;
  }
};
