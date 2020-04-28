import React from "react";
import { Menu, Icon } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Menu theme="dark" mode="horizontal" style={{ width: "100%" }}>
      <Menu.Item disabled>
        <Link to="/">
          <span style={{ color: "white" }}>LOGO</span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/">
          <Icon type="home" />
          Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="#/createNote">
          <Icon type="edit" />
          Create Note
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="#/about">
          <Icon type="info-circle" />
          About
        </Link>
      </Menu.Item>
    </Menu>
  );
}
