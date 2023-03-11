import React, { memo } from "react";

function PureComponent(props) {
  console.log("Pure Component re-render");
  return <div>Pure Component {props.count}</div>;
}

export default memo(PureComponent);
