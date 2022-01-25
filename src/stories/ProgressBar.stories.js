import React from "react";
import { ProgressBar } from "investira.react.components";
import { basicColors } from "./options";

export default {
  title: "ProgressBar",
  parameters: {
    componentSubtitle: "ProgressBar",
  },
  component: ProgressBar,
  argTypes: {
    color: {
      options: basicColors,
      control: { type: "radio" },
    },
    animate: {
      options: ["indeterminate", "progress"],
      control: { type: "radio" },
    },
  },
};

export const Default = (args) => {
  return <ProgressBar {...args} />;
};
Default.args = {
  value: 100,
};
