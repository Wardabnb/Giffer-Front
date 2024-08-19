import React, { useState } from "react";
import GifPicker from "gif-picker-react";
import FormDemo from "./form";
import { useClickAway } from "@uidotdev/usehooks";
export default function CreatePost({ setPosts }) {
  const [showGif, setShowGif] = useState(false);
  const [selectedGif, setSelectedGif] = useState("");
  const ref = useClickAway(() => {
    setShowGif(false);
  });
  return (
    <div className="addPost">
      <FormDemo
        setPosts={setPosts}
        setShowGif={setShowGif}
        showGif={showGif}
        selectedGif={selectedGif}
        setSelectedGif={setSelectedGif}
      />
      <div ref={ref}>
        {showGif && (
          <GifPicker
            contentFilter="high"
            tenorApiKey={"AIzaSyBl94ibFgTN7UPwlW9l13IpGyYwp1YqsXk"}
            onGifClick={(v) => {
              setSelectedGif(v.url);
              setShowGif(false);
            }}
            theme="dark"
          />
        )}
      </div>
      {selectedGif != "" && <img src={selectedGif} alt="" />}
    </div>
  );
}
