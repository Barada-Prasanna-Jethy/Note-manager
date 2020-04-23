import React from "react";
import { Typography } from "antd";
const { Title } = Typography;
export default () => {
  return (
    <div style={{ marginTop: "2em", textAlign: "center" }}>
      <Title level={2} type="danger">
        About Notes
      </Title>
      <Title level={3}>A simple app to manage Notes</Title>
      <Title level={4} code>
        {" "}
        Version 1.0.0
      </Title>
    </div>
  );
};
