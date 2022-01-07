import React from "react";
import { Divisor } from "investira.react.components";

export default {
  title: "Divisor",
  component: Divisor,
  argTypes: {
    direction: {
      options: ["vertical", "horizontal"],
      control: {
        type: "radio",
      },
    },
  },
};

export const Default = (args) => {
  return (
    <div style={{ height: "100vh" }}>
      <Divisor {...args} />
    </div>
  );
};
Default.args = {
  direction: "horizontal",
};
