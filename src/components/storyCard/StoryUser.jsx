import React from "react";
import "./style.story.scss";
// import { SwiperSlide } from "swiper/react";
import "swiper/css";
export default function StoryUser(props) {
  return (
    <div className="story-card">
      <div className="content-cover-story">
        <div className="user-picture-story">
          <img src={props.img} alt="" />
        </div>
      </div>
      <p className="story-user-name">{props.nameUser}</p>
    </div>
  );
}
