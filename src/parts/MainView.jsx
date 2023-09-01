import React, { Component } from "react";
import "../assets/styles/part/mainView.scss";
import HomePage from "../pages/home/HomePage";
import { Routes, Route, Outlet } from "react-router-dom";
export default class MainView extends Component {
  render() {
    return (
      <main className="container__main_view_page">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Outlet />
      </main>
    );
  }
}
