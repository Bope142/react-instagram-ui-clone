import React from "react";
import "./InputComment.scss";
import { ReactComponent as IconEmoji } from "../../assets/icons/show-emoji-selection-regular.svg";

export default function InputComment() {
  return (
    <div className="content-input-box">
      <input type="text" placeholder="Add a comment" />
      <div className="content-btn-action">
        <button className="btn-post-comment">Post</button>
        <button className="btn-show-emoji-box">
          <IconEmoji></IconEmoji>
        </button>
      </div>
    </div>
  );
}
