import React from "react";

export default function Note(props) {
  const contents = JSON.parse(localStorage.getItem("document"));

  const noteId = props.match.params.id;
  return (
    <div className="notePage" style={{ width: "80%", margin: "3rem auto" }}>
      <div dangerouslySetInnerHTML={{ __html: contents[noteId] }} />
    </div>
  );
}
