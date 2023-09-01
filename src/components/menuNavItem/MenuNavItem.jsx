import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
export default function MenuNavItem(props) {
  if (props.msg) {
    return (
      <Link to={props.url} className="link-nav-item">
        <div className="nav-item-icons">
          <span className="msg-notification">{props.msg}</span>
          <props.icons></props.icons>
        </div>
        <p className={"nav-item-text" + props.classActive}>{props.text}</p>
      </Link>
    );
  } else if (props.profilPicture) {
    return (
      <Link to={props.url} className="link-nav-item">
        <div className="nav-item-icons profil-item-icons">
          <img src={props.profilPicture} alt="" />
        </div>
        <p className={"nav-item-text" + props.classActive}>{props.text}</p>
      </Link>
    );
  } else {
    return (
      <Link to={props.url} className="link-nav-item">
        <div className="nav-item-icons">
          <props.icons></props.icons>
        </div>
        <p className={"nav-item-text" + props.classActive}>{props.text}</p>
      </Link>
    );
  }
}
