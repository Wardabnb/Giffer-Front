import React from "react";
import AvatarDemo from "./avatar.jsx";
export default function Nav({ user }) {
  console.log("userNav", user);

  return (
    <nav>
      <AvatarDemo image={user.image} />
      {user.username}
      <ul>
        <li>Home</li>
        <li>Settings</li>
        <li>Messages</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
}
