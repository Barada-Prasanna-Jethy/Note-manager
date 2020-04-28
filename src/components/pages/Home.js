import React, { Component } from "react";
import { Card, Icon, Col, Typography, Row, Button, Menu, Dropdown } from "antd";
import { DownOutlined, FolderOpenFilled } from "@ant-design/icons";
const { Title } = Typography;
export default class Home extends Component {
  state = { contents: [] };
  componentDidMount() {
    if (localStorage.getItem("document"))
      this.setState({ contents: JSON.parse(localStorage.getItem("document")) });
  }
  onDeleteClick(index) {
    const prevcontent = JSON.parse(localStorage.getItem("document"));
    prevcontent.splice(index, 1);
    localStorage.setItem("document", JSON.stringify(prevcontent));

    this.setState({ contents: JSON.parse(localStorage.getItem("document")) });
  }
  deleteAll() {
    localStorage.clear();
    this.setState({
      contents: []
    });
  }
  render() {
    const renderCards = this.state.contents.map((content, index) => {
      return (
        <Col key={index} lg={8} md={12} xs={24}>
          <Card
            hoverable
            style={{ width: 370, marginTop: 16 }}
            actions={[
              <a href={`/note/${index}`}>
                <FolderOpenFilled />
              </a>,
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="0">
                      <a href={`/editNote/${index}`}>
                        <Icon type="edit" /> edit note
                      </a>
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item
                      key="1"
                      onClick={() => {
                        this.onDeleteClick(index);
                      }}
                    >
                      <Icon type="delete" /> delete note
                    </Menu.Item>
                  </Menu>
                }
                trigger={["click"]}
              >
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
        <Title style={{ display: "inline-block" }} level={2}>
          {" "}
          Notes{" "}
        </Title>
        <Button
          style={{ float: "right" }}
          type="primary"
          danger
          onClick={() => {
            this.deleteAll();
          }}
        >
          Delete All
        </Button>

        {this.state.contents.length === 0 ? (
          <Title style={{ textAlign: "center", marginTop: "2em" }}>
            No Notes Found
          </Title>
        ) : null}

        <Row gutter={[32, 16]}>{renderCards}</Row>
      </div>
    );
  }
}
