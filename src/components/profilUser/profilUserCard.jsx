import React from "react";
import "./profilUser.scss";
export default function ProfilUserCard(props) {
  return (
    <div className={"profil__card " + props.classStoryProfil}>
      <div className="content-picture">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
}
