import React from "react";
import AvatarDemo from "../../component/avatar";
import { BellPlus, CalendarCheck, MapPin, MoveLeft } from "lucide-react";
import "./Profile.css";
import { Button } from "../../component/Button";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Posts from "../../component/Posts";
export default function Profile() {
  const { username } = useParams();
  const posts = useSelector((state) => state.posts);
  const usersPosts = posts.filter((post) => post.user.username === username);

  return (
    <div className="containerProfile">
      <div className="headerProfile">
        <div className="back">
          <Link to={`/`}>
            <MoveLeft className="left" />
          </Link>
        </div>
        <div className="user">
          <h1>{username}</h1>
        </div>
      </div>
      <div className="background">
        <img src="../../../public/images.jpg" alt="" />
      </div>
      <div className="info">
        <div className="avatarimg">
          <AvatarDemo width="150px" height="150px" />
          <h1>{username}</h1>
          <p>bio</p>
        </div>
        <div className="infosup">
          <div className="links">
            <div>
              <MapPin />
              Location
            </div>
            <div>
              <Link /> website
            </div>
            <div>
              <CalendarCheck /> Joind Today
            </div>
          </div>
          <div className="click">
            <div className="Bell">
              <BellPlus />
            </div>

            <Button className="follow"> Follow</Button>
          </div>
        </div>
      </div>
      <div className="postsProfile">
        {usersPosts.map((post, index) => {
          return <Posts key={index} post={post} />;
        })}
      </div>
    </div>
  );
}
