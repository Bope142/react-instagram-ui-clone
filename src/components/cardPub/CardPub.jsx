import React from "react";
import "./style.cardpub.scss";
import ProfilUserCard from "../profilUser/profilUserCard";
import { LabelNameUser } from "../label/label";
import { ReactComponent as IconMore } from "../../assets/icons/more.svg";
import { ReactComponent as IconLike } from "../../assets/icons/like-regular.svg";
import { ReactComponent as IconComment } from "../../assets/icons/comment-regular.svg";
import { ReactComponent as IconShare } from "../../assets/icons/share-post-regular.svg";
import { ReactComponent as IconSave } from "../../assets/icons/save-post-regular.svg";
import ButtonIcons from "../buttons/ButtonIcons";
import InputComment from "../inputForm/InputComment";
const HeaderCard = (props) => {
  return (
    <div className="card__header">
      <ProfilUserCard
        img={props.profilPicture}
        classStoryProfil={props.storyProfil}
      ></ProfilUserCard>
      <LabelNameUser
        name={props.nameUser}
        isCertified={props.VerifiedUser}
      ></LabelNameUser>
      <p className="days-pub">{props.pub_time}</p>
      <button className="btn-more-action-pub">
        <IconMore></IconMore>
      </button>
    </div>
  );
};

const ContentPubPost = (props) => {
  return (
    <div className="content-pub-post">
      <img src={props.imagePub} alt="" />
    </div>
  );
};

const ContentActionPost = (props) => {
  return (
    <div className="card-pub-controll">
      <div className="left-box">
        <ButtonIcons icons_btn={IconLike} id="#btn-like-post"></ButtonIcons>
        <ButtonIcons
          icons_btn={IconComment}
          id="#btn-comment-post"
        ></ButtonIcons>
        <ButtonIcons icons_btn={IconShare} id="#btn-share-post"></ButtonIcons>
      </div>
      <div className="box-right">
        <ButtonIcons icons_btn={IconSave} id="#btn-save-post"></ButtonIcons>
      </div>
    </div>
  );
};
const ContentLikePostCount = (props) => {
  return <p className="like-count">{props.like_count} Likes</p>;
};
export default function CardPub(props) {
  return (
    <div className="card-pub">
      <HeaderCard
        profilPicture={props.profilPicture}
        storyProfil={props.classStoryProfil}
        pub_time={props.pub_time}
        VerifiedUser={props.VerifiedUser}
        nameUser={props.nameUser}
      ></HeaderCard>
      <ContentPubPost imagePub={props.imagePub}></ContentPubPost>
      <ContentActionPost></ContentActionPost>
      <ContentLikePostCount
        like_count={props.like_count}
      ></ContentLikePostCount>
      <InputComment></InputComment>
    </div>
  );
}
