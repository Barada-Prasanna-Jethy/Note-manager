import React, { Component } from "react";
import { Button } from "antd";
import Quilleditor from "../quill/Quilleditor";

export default class Create extends Component {
  state = {
    content: ""
  };
  componentDidMount() {
    const contents = JSON.parse(localStorage.getItem("document"));
    const noteId = this.props.match.params.id;
    this.setState({ content: contents[noteId] });
  }
  onEditorChange = value => {
    this.setState({ content: value });
  };

  onSubmit = e => {
    const prevcontent = JSON.parse(localStorage.getItem("document"));
    if (localStorage.getItem("document")) {
      prevcontent.push(this.state.content);
      localStorage.setItem("document", JSON.stringify(prevcontent));
    } else {
      localStorage.setItem("document", JSON.stringify([this.state.content]));
    }
    this.setState({ content: "" });
    // const content = this.state.content;
    this.props.history.push("/");
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Quilleditor
          placeholder={"Write something...."}
          onEditorChange={this.onEditorChange}
          value={this.state.content}
        />
        <form onSubmit={this.onSubmit}>
          <div style={{ textAlign: "center", margin: "2rem" }}>
            <Button htmlType="submit" onSubmit={this.onSubmit} type="ghost">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
