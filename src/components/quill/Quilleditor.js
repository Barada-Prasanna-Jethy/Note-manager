import React, { Component } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

export default class Quilleditor extends Component {
  state = {
    editorHtml: ""
  };
  componentDidMount(
    ()=>{this.setState({editorHtml:this.props.})}
  )
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
        {/* <div id="toolbar">
          <select
            className="ql-header"
            defaultValue={""}
            onChange={e => e.persist()}
          >
            <option value="1" />
            <option value="2" />
            <option value="" />
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
        </div> */}
        <ReactQuill
          //   ref={el => {
          //     this.reactQuillRef = el;
          //   }}
          theme={"snow"}
          onChange={this.handleChange}
          modules={this.modules}
          formats={this.formats}
          //   value={this.state.editorHtml}
          placeholder={this.props.placeholder}
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
    "bold",
    "italic",
    "align",
    "underline",
    "strike",
    "link",
    "code-block",
    "video",
    "image",
    "blockquote",
    "clean"
  ];
}
