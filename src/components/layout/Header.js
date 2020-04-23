import React from "react";
import { Menu, Icon } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Menu theme="dark" mode="horizontal">
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
        <Link to="/createNote">
          <Icon type="edit" />
          Create Note
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about">
          <Icon type="info-circle" />
          About
        </Link>
      </Menu.Item>
      {/* <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="setting" />
            Navigation Three - Submenu
          </span>
        }
      >
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </SubMenu> */}
    </Menu>
  );
}
