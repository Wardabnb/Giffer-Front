import React from "react";
import * as Form from "@radix-ui/react-form";
import AvatarDemo from "./avatar";
import { Smile } from "lucide-react";
import { useDispatch } from "react-redux";
import { addPost } from "../app/slices/postSlice";

const FormDemo = ({
  setShowGif,
  showGif,
  selectedGif,
  setSelectedGif,
  user,
}) => {
  const dispatch = useDispatch();
  function handelClick() {
    dispatch(
      addPost({
        src: selectedGif,
        user: { username: "warda" },
      })
    );
    setSelectedGif("");
  }
  function handleOpenEmoji() {
    setShowGif(!showGif);
  }
  return (
    <Form.Root className="FormRoot">
      <Form.Field className="FormField" name="question">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        ></div>
        <AvatarDemo image={user.image} />
        <Form.Control asChild>
          <textarea className="Textarea" required />
        </Form.Control>
      </Form.Field>
      <Smile onClick={handleOpenEmoji} style={{ color: "white" }} />
      <Form.Submit asChild>
        <button
          className="Button"
          style={{ marginTop: 10 }}
          onClick={handelClick}
        >
          Post
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default FormDemo;
