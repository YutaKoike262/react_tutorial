import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const ContentLadyStyle = {
    color: color,
    fontSize: "25px"
  };
  return <p style={ContentLadyStyle}>{children}</p>;
};
