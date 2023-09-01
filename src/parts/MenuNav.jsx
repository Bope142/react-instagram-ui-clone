import React, { Component } from "react";
import "../assets/styles/part/menuNav.scss";
import { ReactComponent as IGlogo } from "../assets/icons/IGlogo.svg";
import { ReactComponent as HomeIcons } from "../assets/icons/home-filled.svg";
import { ReactComponent as searchIcons } from "../assets/icons/search-regular.svg";
import { ReactComponent as exploreIcons } from "../assets/icons/explore-regular.svg";
import { ReactComponent as reelsIcons } from "../assets/icons/reels-regular.svg";
import { ReactComponent as messageIcons } from "../assets/icons/message-regular.svg";
import { ReactComponent as notificationIcons } from "../assets/icons/notification-regular.svg";
import { ReactComponent as createIcons } from "../assets/icons/create-post-regular.svg";
import profilUser from "../assets/images/user_profil.jpg";
import { ReactComponent as moreIcons } from "../assets/icons/more-menu-nav.svg";
import MenuNavItem from "../components/menuNavItem/MenuNavItem";
const NavLogoUi = () => {
  return (
    <div className="nav-menu-logo">
      <IGlogo className="icons-instagram-title"></IGlogo>
    </div>
  );
};
const MenuItemNav = (props) => {
  const itemNavLink = [
    {
      texte: "Home",
      icons: HomeIcons,
      url: "/",
      activeClass: " select-item",
    },
    {
      texte: "Search",
      icons: searchIcons,
      url: "/",
      activeClass: "",
    },
    {
      texte: "Explore",
      icons: exploreIcons,
      url: "/",
      activeClass: "",
    },
    {
      texte: "Reels",
      icons: reelsIcons,
      url: "/",
      activeClass: "",
    },
    {
      texte: "Messages",
      icons: messageIcons,
      url: "/",
      msg: 6,
      activeClass: "",
    },
    {
      texte: "Notification",
      icons: notificationIcons,
      url: "/",
      activeClass: "",
    },
    {
      texte: "Create",
      icons: createIcons,
      url: "/",
      activeClass: "",
    },
    {
      texte: "Profile",
      url: "/",
      profilPicture: profilUser,
      activeClass: "",
    },
    {
      texte: "More",
      icons: moreIcons,
      url: "/",
      activeClass: "",
    },
  ];
  const itemLinkComponent = itemNavLink.map((item, index) => {
    if (item.msg) {
      return (
        <MenuNavItem
          key={index}
          text={item.texte}
          icons={item.icons}
          url={item.url}
          msg={item.msg}
          classActive={item.activeClass}
        />
      );
    } else if (item.profilPicture) {
      return (
        <MenuNavItem
          key={index}
          text={item.texte}
          icons={item.icons}
          url={item.url}
          profilPicture={item.profilPicture}
          classActive={item.activeClass}
        />
      );
    } else {
      return (
        <MenuNavItem
          key={index}
          text={item.texte}
          icons={item.icons}
          url={item.url}
          classActive={item.activeClass}
        />
      );
    }
  });

  return <ul className="nav-menu-item-container">{itemLinkComponent}</ul>;
};
export default class MenuNav extends Component {
  render() {
    return (
      <nav className="app__navigation">
        <NavLogoUi></NavLogoUi>
        <MenuItemNav></MenuItemNav>
      </nav>
    );
  }
}
