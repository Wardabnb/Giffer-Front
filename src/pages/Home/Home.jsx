import React, { useEffect, useState } from "react";
import Nav from "../../component/Nav";
import CreatePost from "../../component/CreatePost";
import Posts from "../../component/Posts";
import "./Home.css";
import Stars from "../../component/stars";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../app/slices/postSlice";
function Home() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    function getAllPosts() {
      fetch("http://localhost:3000/posts")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          dispatch(setPosts(data));
        });
    }
    getAllPosts();
  }, []);
  console.log(posts);

  return (
    <>
      <div className="container">
        <div className="nav">
          <Nav />
        </div>

        <div className="content">
          <CreatePost />
          {posts.map((post, index) => {
            return <Posts key={index} post={post} />;
          })}
        </div>
        <div></div>
      </div>
      <div className="StarsContainer">
        {Array.from({ length: 100 }).map(() => {
          return <Stars key={Math.random()} />;
        })}
      </div>
    </>
  );
}
export default Home;
