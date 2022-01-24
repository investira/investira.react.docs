import React from "react";
import { NavDots } from "investira.react.components";

export default {
  title: "NavDots",
  component: NavDots,
};

export const Default = (args) => {
  return <NavDots {...args} />;
};
Default.args = {
  size: 5,
};
