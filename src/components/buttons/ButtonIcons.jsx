import React from "react";
import "./ButtonIcons.scss";
export default function ButtonIcons(props) {
  return (
    <button className="btn-icons-transparent" id={props.id}>
      <props.icons_btn></props.icons_btn>
    </button>
  );
}
