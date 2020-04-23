import React, { Component } from "react";
import { Card, Icon, Col, Typography, Row } from "antd";

import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
const { Title } = Typography;
export default class Home extends Component {
  state = { contents: [] };
  componentDidMount() {
    this.setState({ contents: JSON.parse(localStorage.getItem("document")) });

    if (localStorage.getItem("document")) {
      this.setState({ contents: JSON.parse(localStorage.getItem("document")) });
    } else {
      this.setState({
        contents: ["<p>No Notes Found</p>"]
      });
    }
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );
    const renderCards = this.state.contents.map((content, index) => {
      return (
        <Col key={index} lg={8} md={12} xs={24}>
          <Card
            hoverable
            style={{ width: 370, marginTop: 16 }}
            actions={[
              <a href={`/createNote/${index}`}>
                <Icon type="edit" key={`edit-${index}`} />
              </a>,
              <Dropdown overlay={menu} trigger={["click"]}>
                <a
                  className="ant-dropdown-link"
                  onClick={e => e.preventDefault()}
                >
                  <Icon type="ellipsis" key="ellipsis" />
                  <DownOutlined />
                </a>
              </Dropdown>
            ]}
          >
            <div style={{ height: 150, overflowY: "scroll", marginTop: 10 }}>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </Card>
        </Col>
      );
    });

    return (
      <div style={{ width: "85%", margin: "3rem auto" }}>
        <Title level={2}> Notes </Title>
        <Row gutter={[32, 16]}>{renderCards}</Row>
      </div>
    );
  }
}
