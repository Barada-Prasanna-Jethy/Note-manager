import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default class Quilleditor extends Component {
  state = {
    editorHtml: ""
  };

  handleChange = html => {
    this.setState(
      {
        editorHtml: html
      },
      () => {
        this.props.onEditorChange(this.state.editorHtml);
      }
    );
  };
  render() {
    return (
      <div>
        <div id="toolbar">
          <select
            className="ql-header"
            defaultValue={""}
            onChange={e => e.persist()}
          >
            <option value="1" />
            <option value="2" />
            <option value="" />
          </select>
          <select className="ql-color">
            <option value="red"></option>
            <option value="green"></option>
            <option value="blue"></option>
            <option value="orange"></option>
            <option value="violet"></option>
            <option value="#d0d1d2"></option>
            <option selected></option>
          </select>
          <button className="ql-bold" />
          <button className="ql-italic" />

          <button className="ql-underline" />
          <button className="ql-strike" />
          <button className="ql-link" />
          <button className="ql-code-block" />
          <button className="ql-video" />
          <button className="ql-image" />
          <button className="ql-blockquote" />
          <button className="ql-clean" />
          <select class="ql-align">
            <button class="ql-align" value=""></button>
            <button class="ql-align" value="center"></button>
            <button class="ql-align" value="right"></button>
            <button class="ql-align" value="justify"></button>
          </select>
        </div>
        <ReactQuill
          //   ref={el => {
          //     this.reactQuillRef = el;
          //   }}
          theme={"snow"}
          onChange={this.handleChange}
          modules={this.modules}
          formats={this.formats}
          placeholder={this.props.placeholder}
          value={
            this.state.editorHtml === ""
              ? this.props.value
              : this.state.editorHtml
          }
        />
      </div>
    );
  }
  modules = {
    // syntax: true,
    toolbar: "#toolbar"
  };

  formats = [
    "header",
    "color",
    "bold",
    "italic",
    "underline",
    "strike",
    "link",
    "code-block",
    "video",
    "image",
    "blockquote",
    "clean",
    "align"
  ];
}
