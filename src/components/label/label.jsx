import React from "react";
import "./label.scss";
import { ReactComponent as IconVerifiedUser } from "../../assets/icons/verified-user.svg";

export function LabelNameUser(props) {
  if (props.isCertified === true) {
    return (
      <div className="user-name-label">
        <p>{props.name}</p>
        <IconVerifiedUser></IconVerifiedUser>
      </div>
    );
  } else {
    return (
      <div className="user-name-label">
        <p>{props.name}</p>
      </div>
    );
  }
}
