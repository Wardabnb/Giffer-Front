import React, { useEffect, useState } from "react";
import Nav from "../../component/Nav";
import CreatePost from "../../component/CreatePost";
import Posts from "../../component/Posts";
import "./Home.css";
import Stars from "../../component/stars";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../app/slices/postSlice";
import { useSearchParams } from "react-router-dom";

function Home() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  useEffect(() => {
    function getAllPosts() {
      fetch("http://localhost:3000/posts")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          dispatch(setPosts(data));
        });
    }
    function getUser() {
      const userId = searchParams.get("userId");
      if (!userId) return;
      fetch(`http://localhost:3000/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          setUser(data.user);
          localStorage.setItem("user", JSON.stringify(data.user));
        });
    }
    getUser();
    getAllPosts();
  }, []);

  console.log("users", user);

  return (
    <>
      <div className="container">
        <div className="nav">
          <Nav user={user} />
        </div>

        <div className="content">
          <CreatePost user={user} />
          {posts.map((post, index) => {
            return <Posts key={index} post={post} user={user} />;
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
