import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

export const postSlice = createSlice({
  name: "posts",
  // initialState: JSON.parse(localStorage.getItem("posts")) || initialPosts,
  initialState: [],
  reducers: {
    setPosts: (state, action) => {
      return action.payload;
    },
    addPost: (state, action) => {
      // localStorage.setItem("posts", JSON.stringify([action.payload, ...state]));
      //send post to express api
      console.log("action.payload", action.payload);

      fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(action.payload),
      });
      return (state = [action.payload, ...state]);
    },
  },
});
export const { addPost, setPosts } = postSlice.actions;
