import React from "react";
import AvatarDemo from "./avatar";
import { Link } from "react-router-dom";

export default function Posts({ post, selectedGif, user }) {
  return (
    <div className="posts">
      <div className="header">
        <AvatarDemo image={user.image} />
        <Link to={`/profile/${post.user.username}`}>
          <div className="username">{post.user.username}</div>
        </Link>
      </div>
      <img src={post.src} alt="" />
    </div>
  );
}
