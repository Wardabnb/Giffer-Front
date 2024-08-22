import React, { useEffect, useRef } from "react";
import * as Avatar from "@radix-ui/react-avatar";

const AvatarDemo = ({
  width = "40px",
  height = "40px",
  image = "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg",
}) => {
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.setAttribute("referrerpolicy", "no-referrer");
    }
  }, [imgRef]);
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Avatar.Root className="AvatarRoot" style={{ width, height }}>
        <Avatar.Image
          className="AvatarImage"
          src={image}
          alt="Colm Tuite"
          referrerPolicy="no-referrer"
        />
        <Avatar.Fallback className="AvatarFallback" delayMs={600}>
          CT
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
};

export default AvatarDemo;
