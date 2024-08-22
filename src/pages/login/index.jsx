import React from "react";
import "./index.css";
import { getGoogleOAuthUrl } from "../../utils/getGoogleUrl";
export default function LogIn() {
  return (
    <>
      <div className="index">
        <div className="details">
          <h1>Welcome</h1>
          <p>We are glad to see you back with us</p>
          <a href={getGoogleOAuthUrl()}>
            <button>
              <img src="/google.png" alt="" />
              Login with <span>Google</span>
            </button>
          </a>
        </div>
        <div className="image">
          <img src="/login.png" alt="" />
        </div>
      </div>
      <div className="background">
        <img src="/back.png" alt="" />
      </div>
    </>
  );
}
